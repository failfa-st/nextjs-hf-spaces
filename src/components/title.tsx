import { Button, Link, Paper, Stack, Typography } from "@mui/material";
import { HighlightBox } from "./base/boxes";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function Title() {
  return (
    <Stack
      spacing={4}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "40vh",
        p: 4,
      }}
    >
      <Typography variant="h1" component="h1">
        <Link
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </Link>{" "}
        on 🤗{" "}
        <Link
          href="https://huggingface.co/spaces"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spaces
        </Link>
      </Typography>

      <HighlightBox>
        <Typography variant="h5" component="p">
          Run your ML demo with ease in a Next.js environment
        </Typography>
      </HighlightBox>

      <Stack gap={2} direction="row">
        <Button
          startIcon={<ContentCopyIcon />}
          variant="contained"
          href="https://huggingface.co/spaces/failfast/nextjs-docker-starter?duplicate=true"
          target="_blank"
          rel="noopener"
          color="secondary"
        >
          Duplicate space
        </Button>

        <Button
          href="https://github.com/failfa-st/nextjs-docker-starter"
          target="_blank"
          rel="noopener"
        >
          Contribute on GitHub
        </Button>
      </Stack>
    </Stack>
  );
}
