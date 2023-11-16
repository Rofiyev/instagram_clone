import Layout from "@/layout";
import { Box, Flex } from "@mantine/core";
import Head from "next/head";
import img from "@/assets/img.jpg";
import Image from "next/image";

export default function Liked(): JSX.Element {
  return (
    <>
      <Head>
        <title>Instagram | Liked</title>
      </Head>
      <Layout>
        <main
          style={{
            margin: "auto",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Flex
            w="100%"
            mx="auto"
            align="center"
            gap={20}
            style={{ flexWrap: "wrap" }}
          >
            {[...Array(11)].map((_, id) => (
              <Box
                key={id}
                style={{
                  height: "300px",
                  width: "30%",
                  background: "red",
                  position: "relative",
                  borderRadius: "4px",
                }}
              >
                <Image
                  src={img.src}
                  fill
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: "0px",
                    borderRadius: "4px",
                  }}
                  loading="lazy"
                  alt="Image"
                />
              </Box>
            ))}
          </Flex>
        </main>
      </Layout>
    </>
  );
}
