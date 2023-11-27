import { FunctionComponent, useEffect } from "react";
import * as yup from "yup";
import { Box, Button, Flex, Input } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";

import { clearSessionReset, clearSessionVerification } from "@/services/store";
import { useRouter } from "next/router";

interface VerificationProps {}

const schema = yup.object({
  email: yup.string().min(5).email().label("Email").required(),
});

const Verification: FunctionComponent<VerificationProps> = () => {
  const form = useForm<{ email: string }>({
    initialValues: {
      email: "",
    },
    validate: yupResolver(schema),
  });

  useEffect(() => {
    clearSessionVerification();
    clearSessionReset();
  }, []);
  const navigete = useRouter();

  const onSubmit = async (data: { email: string }) => {};

  return (
    <Box
      h="100vh"
      w="100%"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-up"
    >
      <Box
        h="90vh"
        w="100%"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "220px",
        }}
      >
        <form
          onSubmit={form.onSubmit(onSubmit)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "30px",
            background: "white",
          }}
        >
          <Flex
            w="350px"
            direction="column"
            justify="center"
            gap={20}
            align="center"
            p={20}
          >
            <Input
              placeholder="Email..."
              style={{
                border: "none",
                input: {
                  height: "45px",
                  borderRadius: "16px",
                  outline: "none",
                  border: "none",
                  padding: "20px 15px",
                  fontSize: "18px",
                  color: "black",
                  backgroundColor: "rgba(17, 17, 17, 0.02)",
                },
              }}
              {...form.getInputProps("email")}
              w="100%"
            />
            <Button w="100%" variant="light" type="submit">
              Davom etish
            </Button>
            <Box w="100%">
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Akkauntingiz bormi? unda{" "}
                <span
                  onClick={() => {
                    navigete.push("/auth/login");
                  }}
                  style={{ color: "blue" }}
                >
                  bu yerga bosing
                </span>
              </p>
            </Box>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

export default Verification;
