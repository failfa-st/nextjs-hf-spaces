import {
  Box,
  FormControlLabel,
  Slider,
  SliderProps,
  Typography,
} from "@mui/material";

type SliderWithLabelProps = SliderProps & {
  label?: string;
};

export default function SliderWithLabel(props: SliderWithLabelProps) {
  const { label = "", valueLabelDisplay = "auto" } = props;

  return (
    <Box>
      <Typography variant="subtitle1">{label}</Typography>
      <Slider {...props} valueLabelDisplay={valueLabelDisplay} />
    </Box>
  );
}
