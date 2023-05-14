import Head from "next/head";
import Container from "@mui/material/Container";
import Footer from "@/components/footer";
import Title from "@/components/title";

export default function Home() {
  return (
    <>
      <Head>
        <title>nextjs-docker-starter</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next.js in Docker on 🤗 Spaces" />
      </Head>

      <Container component="main" sx={{ minHeight: "90vh" }}>
        <Title />
      </Container>

      <Footer />
    </>
  );
}
