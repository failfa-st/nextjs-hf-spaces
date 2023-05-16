import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { HfInference } from "@huggingface/inference";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InferenceProps } from "../huggingface";

export default function Summarization(props: InferenceProps) {
  const { model } = props;

  const [token, setToken] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showToken, setShowToken] = useState(false);

  const inference = useRef<HfInference | null>(null);

  useEffect(() => {
    inference.current = new HfInference(token);
  }, [token]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setToken(data.get("token") as string);

    const text = data.get("text") as string;

    call(text);
  };

  const handleShowToken = () => setShowToken(!showToken);

  const call = async (inputs: string) => {
    try {
      const response = await inference.current?.summarization({
        model,
        inputs,
        parameters: {
          max_length: 100,
        },
      });

      setSummary(response?.summary_text as string);
      setError("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <>
      <Paper component="form" onSubmit={handleSubmit} sx={{ padding: "1em" }}>
        <Stack spacing={2}>
          <TextField
            variant="filled"
            label="HF Token"
            name="token"
            type={showToken ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowToken}>
                    {showToken ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="filled"
            label="Text to summarize"
            multiline
            required
            minRows={4}
            name="text"
          />
          <Button type="submit" variant="contained">
            Run
          </Button>

          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            variant="outlined"
            label="Summary"
            multiline
            minRows={2}
            name="text"
            value={summary}
          />
        </Stack>
      </Paper>
    </>
  );
}
