import Layout from "@/layout";
import Head from "next/head";
import { Box, Button, Flex, Text } from "@mantine/core";
import Image from "next/image";
import img from "@/assets/img.jpg";
import { Tabs, rem } from "@mantine/core";
import { IconPhoto, IconVideo } from "@tabler/icons-react";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProfile } from "@/modules/auth/api";
import { IUserProfile } from "@/interface";
import { useAuth } from "@/modules/auth/context";
import useProfile from "@/modules/auth/use-profile";

export default function Profile(): JSX.Element {
  const route: NextRouter = useRouter();
  const iconStyle = { width: rem(12), height: rem(12) };
  const [userFullData, setUserFUllData] = useState<IUserProfile>();

  useEffect(() => {
    (async () => {
      const { data } = await getProfile();
      setUserFUllData(data);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Instagram | Profile</title>
      </Head>
      <Layout>
        {userFullData && (
          <>
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
                        src={
                          userFullData?.image
                            ? userFullData?.image
                            : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                        }
                        alt="Avatar"
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
                          {userFullData?.username}
                        </Text>
                        <Button
                          variant="default"
                          onClick={() => route.push("/edit-profile")}
                        >
                          Edit Profile
                        </Button>
                      </Flex>
                      <Flex align={"center"} gap={"xl"}>
                        <Text size="xl">
                          {userFullData!.user_posts.length +
                            userFullData!.user_reels.length}{" "}
                          posts
                        </Text>
                        <Text size="xl">
                          {userFullData?.followers} followers
                        </Text>
                        <Text size="xl">
                          {userFullData?.following} following
                        </Text>
                      </Flex>
                      <Flex align={"center"} gap={"xl"}>
                        <Text size="lg" color={"gray"}>
                          {userFullData?.fullname}
                        </Text>
                      </Flex>
                      <Flex align={"center"}>
                        <Text size="sm" mr={"10px"}>
                          {userFullData?.bio}
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
                    <Tabs.List
                      justify="center"
                      style={{ marginBottom: "20px" }}
                    >
                      <Tabs.Tab
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
                        {userFullData?.user_posts.map((_, id) => (
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

                    <Tabs.Panel value="videos">
                      {userFullData?.user_posts.map((item, i: number) => (
                        <div key={i}></div>
                      ))}
                    </Tabs.Panel>
                  </Tabs>
                </main>
              </section>
            </main>
          </>
        )}
      </Layout>
    </>
  );
}
