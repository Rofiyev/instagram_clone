import { Avatar, Box, Flex } from "@mantine/core";
import Image from "next/image";

export default function Header(): JSX.Element {
  return (
    <header style={{ maxHeight: "15vh", width: "100%" }}>
      <Flex
        w={"100%"}
        wrap={"nowrap"}
        gap={"10px"}
        style={{ overflowX: "auto", marginInline: "10px" }}
      >
        {[...Array(25)].map((_, i) => (
          <Box
            w={"70px"}
            h={"70px"}
            key={i}
            style={{
              borderRadius: "50%",
              border: "0px solid",
              background: "linear-gradient(to bottom right, #ffcc00, #ff00cc)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Image
              width={65}
              height={65}
              style={{ border: "2px solid #000", borderRadius: "50%" }}
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="avatar"
              loading="lazy"
            />
          </Box>
        ))}
      </Flex>
    </header>
  );
}
