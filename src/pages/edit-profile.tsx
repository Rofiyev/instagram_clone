import { ProfileDemo } from "@/components";
import Layout from "@/layout";
import { getProfile, changeUserProfile } from "@/modules/auth/api";
import { Button, Flex, InputBase, Textarea } from "@mantine/core";
import Head from "next/head";
import { useEffect, useState } from "react";
import { IUserProfile } from "@/interface";
import { useForm } from "react-hook-form";
import { objectToFormData } from "@/utils";
import { NextRouter, useRouter } from "next/router";
import { toast } from "react-toastify";

const EditProfile = () => {
  const [userFullData, setUserFullData] = useState<IUserProfile>();
  const [file, setFile] = useState("");
  const { push }: NextRouter = useRouter();

  useEffect(() => {
    (async () => {
      const { data } = await getProfile();
      setUserFullData(data);
      setFile(data?.image);
    })();
  }, []);

  const handleFile = (file: any) => setFile(file);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const formData = await objectToFormData(data);
    formData.append("image", file);
    try {
      const { data } = await changeUserProfile(formData);
      push("/profile");
      console.log(data);
      toast.success("Changes saved");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Head>
        <title>Edit Profile</title>
      </Head>
      <Layout>
        {userFullData && (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  <ProfileDemo file={file} setFile={handleFile} />
                </Flex>

                <Flex
                  w="50%"
                  justify="center"
                  align="center"
                  direction="column"
                  gap={20}
                >
                  <InputBase
                    w="100%"
                    label="Username"
                    placeholder="Username"
                    defaultValue={userFullData?.username}
                    {...register("username")}
                  />
                  <InputBase
                    w="100%"
                    label="Full_name"
                    placeholder="Full Name"
                    defaultValue={userFullData?.fullname}
                    {...register("fullname")}
                  />
                  <Textarea
                    w="100%"
                    label="Bio"
                    placeholder="bio"
                    defaultValue={userFullData?.bio as string}
                    {...register("bio")}
                  />
                  <Button type="submit">Changed Save</Button>
                </Flex>
              </Flex>
            </form>
          </>
        )}
      </Layout>
    </>
  );
};

export default EditProfile;
