import { responsiveCoruselPosts } from "@/config";
import {
  Card,
  Group,
  Text,
  Menu,
  ActionIcon,
  Image,
  rem,
  Box,
  Avatar,
  Button,
  Input,
  TextInput,
  Flex,
  Checkbox,
} from "@mantine/core";
import { IconDots, IconTrash, IconCopy, IconSend } from "@tabler/icons-react";
import { useState } from "react";
import { FaBookmark, FaHeart, FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import { LuSend } from "react-icons/lu";
import { useDisclosure } from "@mantine/hooks";
import { ModalPost } from ".";

export default function PostCard() {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Card
        mt="lg"
        withBorder
        shadow="sm"
        radius="md"
        style={{ background: "#000", color: "white" }}
      >
        <Card.Section withBorder inheritPadding py="xs">
          <Group justify="space-between">
            <Box display={"flex"} style={{ alignItems: "center", gap: "10px" }}>
              <Avatar
                style={{ cursor: "pointer" }}
                size={"lg"}
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="user author posts"
              />
              <Text fw={500}>username</Text>
              <Button size="sm" variant="subtle" ml={"20px"}>
                Follow
              </Button>
            </Box>
            <Menu withinPortal position="bottom-end" shadow="sm">
              <Menu.Target>
                <ActionIcon variant="subtle" color="gray">
                  <IconDots style={{ width: rem(16), height: rem(16) }} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  color="blue"
                  leftSection={
                    <IconCopy style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Copy link
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <IconTrash style={{ width: rem(14), height: rem(14) }} />
                  }
                  color="red"
                >
                  Block user
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Card.Section>

        <Card.Section>
          <Carousel responsive={responsiveCoruselPosts}>
            {[...Array(4)].map((_, i) => (
              <Image
                key={i}
                src="https://images.unsplash.com/photo-1579263477001-7a703f1974e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              />
            ))}
          </Carousel>
        </Card.Section>

        <Card.Section
          inheritPadding
          mt="sm"
          pb="sm"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box display={"flex"} style={{ alignItems: "center", gap: "10px" }}>
            {!isLiked ? (
              <FaRegHeart
                style={{ fontSize: "25px", cursor: "pointer" }}
                onClick={() => setIsLiked(true)}
              />
            ) : (
              <FaHeart
                style={{ fontSize: "25px", cursor: "pointer", color: "red" }}
                onClick={() => setIsLiked(false)}
              />
            )}
            <FaRegComment style={{ fontSize: "25px", cursor: "pointer" }} />
            <LuSend
              onClick={open}
              style={{ fontSize: "25px", cursor: "pointer" }}
            />
          </Box>
          {!isSaved ? (
            <FaRegBookmark
              style={{ fontSize: "25px", cursor: "pointer" }}
              onClick={() => setIsSaved(true)}
            />
          ) : (
            <FaBookmark
              style={{ fontSize: "25px", cursor: "pointer", color: "white" }}
              onClick={() => setIsSaved(false)}
            />
          )}
        </Card.Section>
        <Card.Section inheritPadding>
          <Text size="sm">2000 likes</Text>
        </Card.Section>

        <Card.Section inheritPadding pb="md">
          <Text mt="sm" size="sm">
            <Text
              span
              style={{ cursor: "pointer" }}
              inherit
              c="var(--mantine-color-anchor)"
            >
              username
            </Text>{" "}
            since last visit, review them to select which one should be added to
            your gallery
          </Text>
          <Text size="sm" color={"gray"} style={{ cursor: "pointer" }}>
            View all 64 comments
          </Text>
          <Input
            mt={"sm"}
            placeholder="Add a comment…"
            variant="unstyled"
            color="#fff"
          />
        </Card.Section>
      </Card>
      {/* Modal */}
      <ModalPost opened={opened} close={close}>
        <Box style={{ position: "relative", height: "80vh" }}>
          <Box h="100px" w="90%">
            <Text style={{ textAlign: "center" }}>Share</Text>
            <TextInput
              data-autofocus
              placeholder="Search users..."
              mt="md"
              mb="md"
            />
          </Box>
          <Box>
            {[...Array(8)].map((_, i) => (
              <Flex
                w="100%"
                key={i}
                align={"center"}
                justify={"space-between"}
                style={{ cursor: "pointer" }}
                onClick={() => setIsCheck(!isCheck)}
              >
                <Flex
                  justify={"flex-start"}
                  m={"10px 0 10px 10px"}
                  align={"center"}
                  gap={"10px"}
                >
                  <Box
                    w={"55px"}
                    h={"55px"}
                    style={{
                      borderRadius: "50%",
                      border: "0px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    <Image
                      width={60}
                      height={60}
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="avatar"
                      loading="lazy"
                    />
                  </Box>
                  <Box>
                    <Text size="sm">rof1yev</Text>
                    <Text size="lg" color="gray">
                      Rofiyev Dilshod
                    </Text>
                  </Box>
                </Flex>
                <Checkbox checked={isCheck} style={{ cursor: "pointer" }} />
              </Flex>
            ))}
          </Box>
          <Flex mt="20px" align="center" gap="10px">
            <Input placeholder="Input component" />
            <Button rightSection={<IconSend size={14} />}>Send</Button>
          </Flex>
        </Box>
      </ModalPost>
      {/* Modal */}
    </div>
  );
}
