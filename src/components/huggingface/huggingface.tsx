import { Typography } from "@mui/material";
import { HfInference } from "@huggingface/inference";
import { useEffect } from "react";
import Summarization from "./inference/summarization";

export type InferenceProps = {
  token?: string;
  model: string;
};

export default function Huggingface() {
  return (
    <>
      <Typography component="h4" variant="h4">
        huggingface.js
      </Typography>

      <Typography component="h5" variant="h5">
        Summarization
      </Typography>
      <Summarization model="facebook/bart-large-cnn" />
    </>
  );
}
