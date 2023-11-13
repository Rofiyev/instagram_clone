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
          <h1>Hello world!</h1>
        </main>
      </Layout>
    </>
  );
}
