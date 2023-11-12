import { useEffect, useState } from "react";
import * as yup from "yup";
import {
  Box,
  Button,
  Flex,
  InputBase,
  Paper,
  PasswordInput,
  Text,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useRouter } from "next/router";
import Link from "next/link";

const schema = yup.object({
  username: yup.string().min(4).label("Username").required(),
  password: yup.string().min(1).label("Password").required(),
  re_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .label("Confirm password")
    .required(),
});

const Register = () => {
  const { getInputProps, onSubmit } = useForm<any>({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      re_password: "",
    },
    validate: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const navigate = useRouter();
  const onRegister = async (data: any) => {
    setLoading(true);
  };

  return (
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
      <form onSubmit={onSubmit(onRegister)}>
        <Paper bg="white" w={400}>
          <Flex direction="column" gap={20} align="center" p={20}>
            <Flex direction="column" gap={22} w="100%">
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
              <PasswordInput
                placeholder="Confirm password"
                radius="sm"
                style={{
                  border: "none",
                }}
                {...getInputProps("re_password")}
              />

              <Button
                loading={loading}
                type="submit"
                style={{
                  color: "rgba(0, 106, 255, 1)",
                  height: "50px",
                  backgroundColor: "rgba(231, 240, 255, 1)",
                  fontSize: "20px",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Register
              </Button>
              <Text
                size="16px"
                color="rgba(17, 17, 17, 0.36)"
                style={{ alignSelf: "center" }}
              >
                Akkauntingiz bormi? unda <Link href="/login">Login!</Link>
              </Text>
            </Flex>
          </Flex>
        </Paper>
      </form>
    </Box>
  );
};

export default Register;
