import { responsiveCorusel } from "@/config";
import { Box, Flex, Text } from "@mantine/core";
import Image from "next/image";
import Carousel from "react-multi-carousel";

export default function Header(): JSX.Element {
  return (
    <header style={{ maxHeight: "18vh", width: "100%" }}>
      <Carousel responsive={responsiveCorusel}>
        {[...Array(20)].map((_, i) => (
          <Flex direction={"column"} key={i} style={{ margin: "0px 5px" }}>
            <Box
              w={"70px !important"}
              h={"70px !important"}
              style={{
                borderRadius: "50%",
                border: 0,
                background:
                  "linear-gradient(to bottom right, #ffcc00, #ff00cc)",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              <Image
                width={69}
                height={69}
                style={{
                  border: "2px solid #000",
                  borderRadius: "50%",
                  objectFit: "cover",
                  transform: "translate(4%, 5%)",
                }}
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="avatar"
                loading="lazy"
              />
            </Box>
            <Text size="xs">username</Text>
          </Flex>
        ))}
      </Carousel>
    </header>
  );
}
