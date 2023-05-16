import Head from "next/head";
import Container from "@mui/material/Container";
import Footer from "@/components/footer";
import Title from "@/components/title";
import Huggingface from "@/components/huggingface/huggingface";
import GettingStarted from "@/components/getting-started";
import ExampleComponents from "@/components/example-components";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>nextjs-docker-starter</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next.js in Docker on 🤗 Spaces" />
      </Head>

      <Container component="main" sx={{ minHeight: "90vh" }}>
        <Stack spacing={4} useFlexGap>
          <Title />

          <GettingStarted />

          <ExampleComponents />
        </Stack>
      </Container>

      <Footer />
    </>
  );
}
