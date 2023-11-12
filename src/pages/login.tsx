import { useState } from "react";
import * as yup from "yup";
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

import { useRouter } from "next/router";
import Link from "next/link";

interface LoginProps {}

const schema = yup.object({
  username: yup.string().min(4).label("Username").required(),
  password: yup.string().min(1).label("Password").required(),
});

function Login(props: LoginProps) {
  const form = useForm<any>({
    initialValues: {
      username: "",
      password: "",
    },
    validate: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const onLogin = async (par: any) => {
    setLoading(true);
  };
  const navigate = useRouter();

  return (
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
      <form onSubmit={form.onSubmit(onLogin)}>
        <Paper bg="white" w={400}>
          <Flex direction="column" gap={20} align="center" p={20}>
            <Flex direction="column" gap={15} w="100%">
              <InputBase
                autoFocus
                placeholder="username"
                radius="sm"
                {...form.getInputProps("username")}
              />

              <PasswordInput
                placeholder="Password"
                radius="sm"
                style={{
                  border: "none",
                }}
                {...form.getInputProps("password")}
              />
              <Title size="12" mt="0">
                <Link href="/auth/reset-email">Parolingizni unutdingizmi?</Link>
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
                Akkauntingiz yo’qmi? unda{" "}
                <Link href="/register">ro’yxatdan o’ting!</Link>
              </Text>
            </Flex>
          </Flex>
        </Paper>
      </form>
    </Box>
  );
}

export default Login;
