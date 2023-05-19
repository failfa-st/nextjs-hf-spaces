import { styled } from "@mui/material/styles";
import { Paper, PaperProps } from "@mui/material";

type CodeProps = {
  children: string;
};

const CodeBox = styled(Paper)<PaperProps>(({ theme }) => ({
  fontFamily: "monospace",
  padding: 8,
  borderTop: `2px solid ${theme.palette.secondary.dark}`,
  borderBottom: `2px solid ${theme.palette.secondary.dark}`,
}));

export default function Code(props: CodeProps) {
  const { children } = props;

  return <CodeBox>{children}</CodeBox>;
}
