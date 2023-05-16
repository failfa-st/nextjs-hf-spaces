import { Typography } from "@mui/material";
import Huggingface from "./huggingface/huggingface";
import { SectionBox } from "./boxes";

export default function ExampleComponents() {
  return (
    <>
      <SectionBox>
        <Typography component="h2" variant="h3" sx={{ textAlign: "center" }}>
          Example Components
        </Typography>
      </SectionBox>
      <Huggingface />
    </>
  );
}
