import { Button, Typography } from "@mui/material";
import { MouseEventHandler } from "react";

interface ExampleButtonProps {
  text: string;
  displayLength?: number;
  onClick?: (text: string) => void;
}

/**
 *
 * A button that hosts an example "text" that can be used as the input
 * to anything to get an inspiration on how to get started.
 *
 * @param props ExampleButtonProps
 * @returns
 */
export default function ExampleButton(props: ExampleButtonProps) {
  const { text, displayLength = 50, onClick } = props;

  const displayText =
    text.slice(0, displayLength) + (text.length > displayLength ? "..." : "");

  const handleClick: MouseEventHandler = event => {
    event.preventDefault();

    if (onClick) {
      onClick(text);
    }
  };

  return (
    <Button
      onClick={handleClick}
      sx={{ textTransform: "none" }}
      variant="outlined"
    >
      <Typography>{displayText}</Typography>
    </Button>
  );
}
