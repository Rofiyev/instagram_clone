import Header from "@/components/Header";
import Layout from "@/layout";
import Head from "next/head";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <Layout>
        <main>
          <Header />

          <h1>Hello world!</h1>
        </main>
      </Layout>
    </>
  );
}
