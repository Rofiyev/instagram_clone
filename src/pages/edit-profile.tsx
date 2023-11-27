import { ProfileDemo } from "@/components";
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
          <Flex
            justify="center"
            align="center"
            direction="column"
            w="50%"
            h="100%"
          >
            <ProfileDemo />
          </Flex>

          <Flex
            w="50%"
            justify="center"
            align="center"
            direction="column"
            gap={20}
          >
            <InputBase w="100%" label="Username" placeholder="username" />
            <InputBase w="100%" label="First_Name" placeholder="first_name" />
            <InputBase w="100%" label="Full_name" placeholder="full_name" />
            <Textarea w="100%" label="Bio" placeholder="bio" />
          </Flex>
        </Flex>
      </Layout>
    </>
  );
};

export default EditProfile;
