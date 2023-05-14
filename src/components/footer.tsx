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
      }}
    >
      <Link href="https://failfa.st" display="flex" alignItems="center">
        Powered by{" "}
        <Image src="/failfast.svg" alt="failfast Logo" width="32" height="32" />
      </Link>

      <Divider orientation="vertical" flexItem />

      <Link
        href="https://github.com/failfa-st/nextjs-docker-starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Contribute on GitHub
      </Link>
    </Box>
  );
};

export default Footer;
