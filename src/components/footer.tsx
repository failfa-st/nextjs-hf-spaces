import Box from "@mui/material/Box";
import Image from "next/image";
import { Divider, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1,
        alignItems: "center",
        mt: 8,
        mb: 4,
      }}
    >
      <Link
        href="https://failfa.st"
        display="flex"
        alignItems="center"
        rel="noopener"
      >
        <Box sx={{ mr: 0.5 }}>Powered by</Box>{" "}
        <Image src="/failfast.svg" alt="failfast Logo" width="32" height="32" />
      </Link>
    </Box>
  );
};

export default Footer;
