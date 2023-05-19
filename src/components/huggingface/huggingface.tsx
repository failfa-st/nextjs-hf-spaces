import { Alert, Link, Typography } from "@mui/material";
import { HfInference } from "@huggingface/inference";
import { useEffect } from "react";
import Summarization from "./inference/summarization";
import { HighlightBox } from "../base/boxes";
import Code from "../base/code";

export type InferenceProps = {
  token?: string;
  model: string;
};

export default function Huggingface() {
  return (
    <>
      <HighlightBox>
        <Typography component="h4" variant="h4">
          huggingface.js
        </Typography>
      </HighlightBox>

      <Typography variant="body1">
        <Link
          href="https://huggingface.co/docs/huggingface.js/index"
          target="_blank"
          rel="noopener"
        >
          huggingface.js
        </Link>{" "}
        is a suite of JavaScript libraries that interact with the Hugging Face
        API. It enables the use of over 100,000 ML models or your own via the{" "}
        <Link
          href="https://huggingface.co/docs/inference-endpoints/index"
          target="_blank"
          rel="noopener"
        >
          Inference API
        </Link>
        , and supports managing Hugging Face repositories.
      </Typography>

      <Alert severity="info">
        When you run into rate limits while using the components, make sure to
        add your 🤗 access token (optained via your{" "}
        <Link
          href="https://huggingface.co/settings/tokens"
          target="_blank"
          rel="noopener"
        >
          account settings
        </Link>
        ) into `HF Access Token` under &quot;Options&quot;.
      </Alert>

      <Typography component="h5" variant="h5">
        Summarization
      </Typography>

      <Code>{`<Summarization model="facebook/bart-large-cnn" maxLength={100} />`}</Code>

      <Summarization model="facebook/bart-large-cnn" maxLength={100} />
    </>
  );
}
