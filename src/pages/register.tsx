import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  InputBase,
  Notification,
  Paper,
  PasswordInput,
  Text,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import { IFormRegister } from "@/interface";
import { FormSchema } from "@/lib";
import Head from "next/head";
import { Api } from "@/modules/auth";
import { toast } from "react-toastify";

const Register = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const { push }: NextRouter = useRouter();

  const { getInputProps, onSubmit, reset } = useForm<IFormRegister>({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: yupResolver(FormSchema),
  });

  const handleSubmit = async (values: IFormRegister) => {
    setLoading(true);
    try {
      const { data } = await Api.Register(values);
      data && push("/login");
      reset();
    } catch (error: any) {
      let str: string = '';
      Object.entries(error.data).forEach(([key, value]) => { str += value });
      toast.error(str, {
        position: 'top-right',
        autoClose: 3000
      })
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Instagram | Register</title>
      </Head>
      <Box
        h="90vh"
        w="100%"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "200px",
        }}
      >
        <Paper w={400} style={{ background: '#000', color: 'white' }}>
          <form onSubmit={onSubmit(handleSubmit)}>
            <Flex direction="column" gap={20} align="center" p={20}>
              <Flex direction="column" gap={22} w="100%">
                <InputBase
                  placeholder="username"
                  radius="sm"
                  required
                  type="text"
                  {...getInputProps("username")}
                />

                <InputBase
                  placeholder="email"
                  type="email"
                  radius="sm"
                  required
                  {...getInputProps("email")}
                />

                <PasswordInput
                  placeholder="Password"
                  radius="sm"
                  type="password"
                  style={{
                    border: "none",
                  }}
                  {...getInputProps("password")}
                />

                <Button
                  type="submit"
                  loading={loading}
                  style={{
                    color: "white",
                    backgroundColor: "gray",
                    fontSize: "18px",
                  }}
                >
                  Register
                </Button>
                <Text
                  size="14px"
                  color="white"
                  style={{ alignSelf: "center" }}
                >
                  Akkauntingiz bormi? unda {' '}
                  <Link href="/login" style={{ textDecoration: 'underline', color: "gray" }}>
                    Login!
                  </Link>
                </Text>
              </Flex>
            </Flex>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default Register;
