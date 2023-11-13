import Layout from "@/layout";
import { Box, Flex } from "@mantine/core";
import Head from "next/head";

export default function Liked(): JSX.Element {
  return (
    <>
      <Head>
        <title>Instagram | Liked</title>
      </Head>
      <Layout>
        <main
          style={{
            marginInline: "auto",
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
            <Box h={300} bg="red" w="30%">
              dqqwdqwd
            </Box>
            <Box h={300} bg="red" w="30%">
              dqqwdqwd
            </Box>
            <Box h={300} bg="red" w="30%">
              dqqwdqwd
            </Box>
            <Box h={300} bg="red" w="30%">
              dqqwdqwd
            </Box>
            <Box h={300} bg="red" w="30%">
              dqqwdqwd
            </Box>
            <Box h={300} bg="red" w="30%">
              dqqwdqwd
            </Box>
            <Box h={300} bg="red" w="30%">
              dqqwdqwd
            </Box>
          </Flex>
        </main>
      </Layout>
    </>
  );
}
