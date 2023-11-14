import Demo from "@/components/Modal";
import Layout from "@/layout";
import { Flex } from "@mantine/core";

function Create() {
  return (
    <>
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
