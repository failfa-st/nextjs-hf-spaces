import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Stack,
} from "@mui/material";
import { ReactElement, useState } from "react";

type OptionsProps = {
  children: ReactElement | ReactElement[];
  opened?: boolean;
};

/**
 *  Define options that are hidden by default
 *
 * @param props OptionsProps
 * @param props.opened boolean - Are the options visible or not (default)
 *
 * @returns Options
 */
export default function Options(props: OptionsProps) {
  const { children, opened = false } = props;

  const [showOptions, setShowOptions] = useState(opened);

  const handleShowOptions = () => setShowOptions(!showOptions);

  return (
    <>
      <Card>
        <CardHeader
          title="Options"
          onClick={handleShowOptions}
          action={
            <IconButton aria-label="expand" size="small">
              {showOptions ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          }
          sx={{
            cursor: "pointer",
          }}
          titleTypographyProps={{ variant: "h6", sx: { fontSize: "1em" } }}
        />
        <Collapse in={showOptions}>
          <CardContent>
            <Stack spacing={2}>{children}</Stack>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
