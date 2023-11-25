import { useState } from "react";
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

function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate: NextRouter = useRouter();

  const { getInputProps, onSubmit } = useForm<IFormLoginValues>({
    initialValues: {
      username: "",
      password: "",
    },
    validate: yupResolver(LoginFormSchema),
  });

  const submitLoginData = async (data: IFormLoginValues) => {
    setLoading(true);
  };

  return (
    <>
      <Head>
        <title>Instagram | Login</title>
      </Head>
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
          <Paper w={400}>
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
                <Title size="12" mt="0">
                  <Link href="#">
                    Parolingizni unutdingizmi?
                  </Link>
                </Title>
                <Button
                  loading={loading}
                  type="submit"
                  style={{
                    borderRadius: "5px",
                    color: "rgba(0, 106, 255, 1)",
                    height: "50px",
                    backgroundColor: "rgba(231, 240, 255, 1)",
                    fontSize: "20px",
                  }}
                >
                  {loading ? "Loading..." : "Tizimga kirish"}
                </Button>
                <Text
                  size="15px"
                  color="rgba(17, 17, 17, 0.36)"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Akkauntingiz yo`qmi? unda{" "}
                  <Link href="/register">ro`yxatdan o`ting!</Link>
                </Text>
              </Flex>
            </Flex>
          </Paper>
        </form>
      </Box>
    </>
  );
}

export default Login;
