import { Link, Typography } from "@mui/material";
import { Box } from "@mui/material";

export default function Title() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
      }}
    >
      <Typography variant="h2" component="h1">
        {" "}
        <Link
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </Link>{" "}
        in{" "}
        <Link
          href="https://www.docker.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docker
        </Link>{" "}
        on 🤗{" "}
        <Link
          href="https://huggingface.co/spaces"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spaces
        </Link>
        !
      </Typography>
    </Box>
  );
}
