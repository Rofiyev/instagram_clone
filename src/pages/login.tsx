import { useLayoutEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  InputBase,
  Paper,
  PasswordInput,
  Text,
  Title,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import { LoginFormSchema } from "@/lib";
import Head from "next/head";
import { IFormLoginValues } from "@/interface";
import { Api } from "@/modules/auth";
import { setSession } from "@/services/store";
import { toast } from "react-toastify";
import useProfile from "@/modules/auth/use-profile";

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const { push }: NextRouter = useRouter();

  const { getInputProps, onSubmit } = useForm<IFormLoginValues>({
    initialValues: {
      username: "",
      password: "",
    },
    validate: yupResolver(LoginFormSchema),
  });

  const submitLoginData = async (par: IFormLoginValues) => {
    setLoading(true);
    try {
      const { data } = await Api.Login(par);
      const tokens: { access: string; refresh: string } = data;
      setSession(tokens);
      push("/");
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.error, {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const [{ user }] = useProfile();
  useLayoutEffect(() => {
    user && push("/");
  }, []);

  return (
    <>
      <Head>
        <title>Instagram | Login</title>
      </Head>
      {!user && (
        <>
          <Box
            h="100vh"
            w="100%"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "200px",
            }}
          >
            <form onSubmit={onSubmit(submitLoginData)}>
              <Paper w={400} style={{ background: "#000" }}>
                <Flex direction="column" gap={20} align="center" p={20}>
                  <Flex direction="column" gap={15} w="100%">
                    <InputBase
                      autoFocus
                      placeholder="username"
                      radius="sm"
                      {...getInputProps("username")}
                    />
                    <PasswordInput
                      placeholder="Password"
                      radius="sm"
                      style={{
                        border: "none",
                      }}
                      {...getInputProps("password")}
                    />
                    <Title size="12" mt="0" style={{ textAlign: "right" }}>
                      <Link
                        style={{
                          fontFamily: "inherit",
                          textDecoration: "none",
                          color: "gray",
                        }}
                        href="#"
                      >
                        Forgot your password?
                      </Link>
                    </Title>
                    <Button
                      size="sm"
                      loading={loading}
                      type="submit"
                      color="gray"
                      style={{
                        borderRadius: "5px",
                      }}
                    >
                      {loading ? "Loading..." : "Login"}
                    </Button>
                    <Text
                      size="15px"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        color: "white",
                      }}
                    >
                      Don`t have an account? in it{" "}
                      <Link
                        style={{ color: "gray", textDecoration: "underline" }}
                        href="/register"
                      >
                        register!
                      </Link>
                    </Text>
                  </Flex>
                </Flex>
              </Paper>
            </form>
          </Box>
        </>
      )}
    </>
  );
}
