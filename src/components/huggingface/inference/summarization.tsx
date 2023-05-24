import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Paper,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { HfInference, SummarizationArgs } from "@huggingface/inference";
import { InferenceProps } from "../huggingface";
import Options from "@/components/base/options";
import SliderWithLabel from "@/components/base/slider-with-label";
import ExampleButton from "@/components/base/example-button";
import Secret from "@/components/base/secret";

type SummarizationProps = InferenceProps & {
  /**
   * (Default: None). Integer to define the maximum length in tokens of the output summary.
   */
  maxLength?: number;
  /**
   * (Default: None). Float (0-120.0). The amount of time in seconds that the query should take maximum. Network can cause some overhead so it will be a soft limit.
   */
  maxTime?: number;
  /**
   * (Default: None). Integer to define the minimum length in tokens of the output summary.
   */
  minLength?: number;
  /**
   * (Default: None). Float (0.0-100.0). The more a token is used within generation the more it is penalized to not be picked in successive generation passes.
   */
  repetitionPenalty?: number;
  /**
   * (Default: 1.0). Float (0.0-100.0). The temperature of the sampling operation. 1 means regular sampling, 0 means always take the highest score, 100.0 is getting closer to uniform probability.
   */
  temperature?: number;
  /**
   * (Default: None). Integer to define the top tokens considered within the sample operation to create new text.
   */
  topK?: number;
  /**
   * (Default: None). Float to define the tokens that are within the sample operation of text generation. Add tokens in the sample for more probable to least probable until the sum of the probabilities is greater than top_p.
   */
  topP?: number;
};

export default function Summarization(props: SummarizationProps) {
  const {
    model,
    maxLength,
    maxTime,
    minLength,
    repetitionPenalty,
    temperature,
    topK,
    topP,
  } = props;

  const [token, setToken] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const inference = useRef<HfInference | null>(null);

  useEffect(() => {
    inference.current = new HfInference(token);
  }, [token]);

  // Parse the data of the form and trigger "call"
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setToken(data.get("token") as string);

    const text = data.get("text") as string;
    const max_length = Number(data.get("maxLength") as string);

    call({ model, inputs: text, parameters: { max_length } });
  };

  /**
   * Call the inference API using args
   */
  const call = async (args: SummarizationArgs) => {
    const { inputs, parameters } = args;

    try {
      setLoading(true);

      const response = await inference.current?.summarization({
        model,
        inputs,
        parameters,
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

    setLoading(false);
  };

  return (
    <>
      <Paper component="form" onSubmit={handleSubmit} sx={{ padding: "1em" }}>
        <Stack spacing={2}>
          <TextField
            variant="filled"
            label="Text to summarize"
            multiline
            required
            minRows={4}
            name="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          />

          <Button type="submit" variant="contained" disabled={loading}>
            Run{" "}
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
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

          <Options>
            <Secret name="token" label="HF Access Token" />

            <SliderWithLabel
              label="max_length"
              name="maxLength"
              aria-label="max length"
              defaultValue={maxLength}
              step={1}
              min={56}
              max={256}
            />
          </Options>

          <Typography variant="h6" sx={{ fontSize: "1em" }}>
            Examples
          </Typography>
          <Stack direction="row" spacing={2}>
            <ExampleButton
              text="The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct."
              onClick={setInputText}
            />

            <ExampleButton
              text="Machine learning (ML) is a field devoted to understanding and building methods that let machines 'learn' – that is, methods that leverage data to improve computer performance on some set of tasks. Machine learning algorithms build a model based on sample data, known as training data, in order to make predictions or decisions without being explicitly programmed to do so. Machine learning algorithms are used in a wide variety of applications, such as in medicine, email filtering, speech recognition, agriculture, and computer vision, where it is difficult or unfeasible to develop conventional algorithms to perform the needed tasks."
              onClick={setInputText}
            />
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}
