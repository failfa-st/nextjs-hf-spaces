import { Box, Stack, Typography } from "@mui/material";
import Huggingface from "./huggingface/huggingface";
import { DividerBox, HighlightBox, SectionBox } from "./base/boxes";
import { UnderConstruction } from "./under-construction";

export default function ExampleComponents() {
  return (
    <>
      <SectionBox>
        <Stack spacing={2}>
          <Typography component="h2" variant="h3">
            Components
          </Typography>

          <Typography variant="body1">
            Unsure where to begin? Our pre-built components offer a jumpstart
            for your ML demo 🚀
          </Typography>
        </Stack>
      </SectionBox>

      <Huggingface />

      <DividerBox />

      <Stack spacing={4}>
        <HighlightBox>
          <Typography variant="h4">More comming soon!</Typography>
        </HighlightBox>

        <UnderConstruction />
      </Stack>
    </>
  );
}
