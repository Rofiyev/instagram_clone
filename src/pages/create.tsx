import Demo from "@/components/Modal";
import Layout from "@/layout";
import { Flex } from "@mantine/core";
import Head from "next/head";

function Create() {
  return (
    <>
      <Head>
        <title>Instagram Create</title>
      </Head>
      <Layout>
        <Flex>
          <h1>Create new post</h1>
          <hr />
          <Demo />
        </Flex>
      </Layout>
    </>
  );
}

export default Create;
