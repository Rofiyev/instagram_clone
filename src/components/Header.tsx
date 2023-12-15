import { responsiveCorusel } from "@/config";
import { Box, Flex, Text } from "@mantine/core";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { Storys } from ".";
import { ISorysUser, IStorys } from "@/interface";

export default function Header({ storys }: { storys: IStorys[] }): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);

  const stoysComponents: ISorysUser[] = [];

  storys.map((storys: IStorys) => {
    stoysComponents.push({
      url: storys.story,
      type: storys.story.endsWith(".mp4") ? "video" : "image",
      duration: 1500,
      header: {
        heading: storys.username,
        subheading: storys.username,
        profileImage:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      },
    });
  });

  return (
    <header style={{ maxHeight: "20vh", width: "100%" }}>
      <Carousel responsive={responsiveCorusel}>
        {storys?.map((item: IStorys) => (
          <Flex
            direction={"column"}
            align={"center"}
            key={item.id}
            style={{ margin: "0px 5px" }}
          >
            <Box
              w={"70px !important"}
              h={"70px !important"}
              style={{
                borderRadius: "50%",
                border: "0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                userSelect: "none",
              }}
              onClick={open}
            >
              <Image
                width={80}
                height={80}
                style={{
                  border: "3px solid #ffcc00",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="avatar"
                loading="lazy"
              />
            </Box>
            <Text size="xs">{item.username}</Text>
          </Flex>
        ))}
      </Carousel>
      {/* Modal */}
      <Modal opened={opened} onClose={close} centered>
        <Storys storys={stoysComponents} />
      </Modal>
    </header>
  );
}
