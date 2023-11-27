import { LeftSidebar, Storys } from "@/components";
import { Flex, InputBase } from "@mantine/core";
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
          <LeftSidebar />
        </section>
        <main
          style={{
            padding: "20px",
            width: "calc(100%)",
            marginLeft: "280px",
          }}
        >
          <h1>Search</h1>
          <Flex justify="center" align="center" w="100%" p={24}>
            <InputBase
              style={{
                borderRadius: "6px",
                background: "rgba(239, 239, 239, 0.20)",
              }}
              w="50%"
              placeholder="search..."
            />
          </Flex>
        </main>
      </div>
    </>
  );
}
