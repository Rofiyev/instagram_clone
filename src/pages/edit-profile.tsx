import Layout from "@/layout";
import { Box, Flex, InputBase, Textarea } from "@mantine/core";
import { FunctionComponent } from "react";

interface EditProfileProps {}

const EditProfile: FunctionComponent<EditProfileProps> = () => {
  return (
    <>
      <Layout>
        <Flex
          w="100%"
          gap={20}
          justify="center"
          align="center"
          h="100vh"
          bg="black"
        >
          <Box w="50%" h="100%" bg="red"></Box>

          <Flex
            w="50%"
            justify="center"
            align="center"
            direction="column"
            gap={20}
          >
            <InputBase w="100%" placeholder="username" />
            <InputBase w="100%" placeholder="first_name" />
            <InputBase w="100%" placeholder="full_name" />
            <Textarea w="100%" placeholder="bio" />
          </Flex>
        </Flex>
      </Layout>
    </>
  );
};

export default EditProfile;
