import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Secret(props: TextFieldProps) {
  const { name = "secret", label = "Secret" } = props;
  const [showSecret, setShowSecret] = useState(false);

  const handleShowSecret = () => setShowSecret(!showSecret);

  return (
    <TextField
      variant="filled"
      label={label}
      name={name}
      type={showSecret ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowSecret}>
              {showSecret ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
