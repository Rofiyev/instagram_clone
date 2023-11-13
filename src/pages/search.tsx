import { Sidebar } from "@/components";
import Head from "next/head";

export default function Search(): JSX.Element {
  return (
    <>
      <Head>
        <title>Instagram | Search</title>
      </Head>
      <div
        style={{
          display: "flex",
          maxWidth: "1500px",
          margin: "0 auto",
          overflow: "hidden",
          minHeight: "100vh",
        }}
      >
        <section>
          <Sidebar />
        </section>
        <main style={{ padding: "20px", width: "100%" }}>
          <h1>Search</h1>
        </main>
      </div>
    </>
  );
}
