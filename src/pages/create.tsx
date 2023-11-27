import Layout from "@/layout";
import { Dropzone } from "@/components";
import { Flex } from "@mantine/core";
import Head from "next/head";

function Create() {
  return (
    <>
      <Head>
        <title>Instagram Create</title>
      </Head>
      <Layout>
        <h1>Create new post</h1>
        <Flex gap={"1rem"}>
          <Dropzone />
          <Dropzone />
          <Dropzone />
        </Flex>
      </Layout>
    </>
  );
}

export default Create;
