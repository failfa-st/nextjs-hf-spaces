import { Stack, Typography } from "@mui/material";
import Huggingface from "./huggingface/huggingface";
import { SectionBox } from "./boxes";

export default function ExampleComponents() {
  return (
    <>
      <SectionBox>
        <Stack spacing={2}>
          <Typography component="h2" variant="h3" sx={{ textAlign: "center" }}>
            Components
          </Typography>

          <Typography variant="body1">
            Unsure where to begin? Our pre-built components are at your service,
            offering a jumpstart for your ML demo.
          </Typography>
        </Stack>
      </SectionBox>

      <Huggingface />
    </>
  );
}
