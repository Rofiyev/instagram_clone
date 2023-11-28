import Layout from "@/layout";
import Head from "next/head";
import { Box, Button, Flex, Text } from "@mantine/core";
import Image from "next/image";
import img from "@/assets/img.jpg";
import { Tabs, rem } from "@mantine/core";
import { IconPhoto, IconVideo } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useAuth } from "@/modules/auth/context";

export default function Profile(): JSX.Element {
  const route = useRouter();
  const iconStyle = { width: rem(12), height: rem(12) };
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Instagram | Profile</title>
      </Head>
      <Layout>
        <main>
          <section
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <main>
              <Flex ml={"10px"} align={"center"} gap={"10px"}>
                <Box
                  w={"35%"}
                  h={"300px"}
                  style={{
                    borderRadius: "50%",
                    border: "0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    userSelect: "none",
                  }}
                >
                  <Image
                    width={200}
                    height={200}
                    style={{
                      border: "3px solid #ffcc00",
                      borderRadius: "50%",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    // @ts-expect-error
                    src={user?.image}
                    alt="avatar"
                    loading="lazy"
                  />
                </Box>
                <Box
                  w={"65%"}
                  display={"flex"}
                  style={{ flexDirection: "column", gap: "10px" }}
                >
                  <Flex align={"center"} gap={"xl"}>
                    <Text size="xl" td="underline" fw={700}>
                      {user?.username}
                    </Text>
                    <Button
                      variant="default"
                      onClick={() => {
                        route.push("/edit-profile");
                      }}
                    >
                      Edit Profile
                    </Button>
                  </Flex>
                  <Flex align={"center"} gap={"xl"}>
                    <Text size="xl">0 posts</Text>
                    {/* @ts-expect-error */}
                    <Text size="xl">{user?.followers} followers</Text>
                    {/* @ts-expect-error */}
                    <Text size="xl">{user?.following} following</Text>
                  </Flex>
                  <Flex align={"center"} gap={"xl"}>
                    <Text size="lg" color={"gray"}>
                      {/* @ts-expect-error */}

                      {user?.fullname}
                    </Text>
                  </Flex>
                  <Flex align={"center"}>
                    <Text size="sm" mr={"10px"}>
                      {/* @ts-expect-error */}

                      {user.bio}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </main>
            <main
              style={{
                margin: "auto",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Tabs defaultValue="posts" style={{ width: "100%" }}>
                <Tabs.List justify="center" style={{ marginBottom: "20px" }}>
                  <Tabs.Tab
                    style={{}}
                    value="posts"
                    leftSection={<IconPhoto style={iconStyle} />}
                  >
                    Posts
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="videos"
                    leftSection={<IconVideo style={iconStyle} />}
                  >
                    Videos
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="posts">
                  <Flex
                    w="100%"
                    mx="auto"
                    align="center"
                    gap={20}
                    style={{ flexWrap: "wrap" }}
                  >
                    {[...Array(11)].map((_, id) => (
                      <Box
                        key={id}
                        style={{
                          height: "300px",
                          width: "30%",
                          position: "relative",
                          borderRadius: "4px",
                        }}
                      >
                        <Image
                          src={img.src}
                          fill
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: "0px",
                            borderRadius: "4px",
                          }}
                          loading="lazy"
                          alt="Image"
                        />
                      </Box>
                    ))}
                  </Flex>
                </Tabs.Panel>

                <Tabs.Panel value="videos">Messages tab content</Tabs.Panel>
              </Tabs>
            </main>
          </section>
        </main>
      </Layout>
    </>
  );
}
