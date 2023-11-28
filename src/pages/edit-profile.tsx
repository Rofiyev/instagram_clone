import { useState } from "react";
import { ProfileDemo } from "@/components";
import Layout from "@/layout";
import { Box, Button, Flex, InputBase, Textarea } from "@mantine/core";
import { FunctionComponent } from "react";
import { useAuth } from "@/modules/auth/context";
import { Api } from "@/modules/auth";

interface EditProfileProps {}

const EditProfile: FunctionComponent<EditProfileProps> = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState(user?.username || "");
  // @ts-expect-error
  const [first_name, setfirst_name] = useState(user?.first_name || "");
  // @ts-expect-error
  const [fullname, setFullName] = useState(user?.fullname || "");
  // @ts-expect-error

  const [bio, setBio] = useState(user.bio || "");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlefirst_nameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setfirst_name(event.target.value);
  };

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { data }: any = await Api.ProfileUpdate({
        username,
        email: user?.email!,
        first_name,
        fullname,
        bio,
      });

      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Flex
        w="100%"
        gap={20}
        justify="center"
        align="center"
        direction={{ sm: "column", md: "row" }}
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
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <InputBase
              w="100%"
              label="Username"
              placeholder="username"
              value={username}
              onChange={handleUsernameChange}
            />
            <InputBase
              w="100%"
              label="First_Name"
              placeholder="first_name"
              value={first_name}
              onChange={handlefirst_nameChange}
            />
            <InputBase
              w="100%"
              label="Full_name"
              placeholder="full_name"
              value={fullname}
              onChange={handleFullNameChange}
            />
            <Textarea
              w="100%"
              label="Bio"
              placeholder="bio"
              value={bio}
              onChange={handleBioChange}
            />
            <Button>Submit</Button>
          </form>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default EditProfile;
