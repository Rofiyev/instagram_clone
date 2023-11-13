import { Header, RightSidebar } from "@/components";
import Layout from "@/layout";
import Head from "next/head";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <Layout>
        <main style={{ display: "flex", width: "100%", gap: "10px" }}>
          <div style={{ width: "65%" }}>
            <Header />
            <div style={{ marginTop: "10px" }}>
              <h1>Hello world!</h1>
            </div>
          </div>
          <RightSidebar />
        </main>
      </Layout>
    </>
  );
}
