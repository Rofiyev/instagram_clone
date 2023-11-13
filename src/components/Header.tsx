import { Box, Flex } from "@mantine/core";
import Image from "next/image";

export default function Header(): JSX.Element {
  return (
    <header style={{ maxHeight: "15vh", width: "100%" }}>
      <div
        style={{
          overflowX: "auto",
          display: "flex",
          gap: "8px",
          padding: "0px 20px 10px",
        }}
      >
        {[...Array(25)].map((_, i) => (
          <Box
            key={i}
            w={"70px !important"}
            h={"65px !important"}
            style={{
              borderRadius: "50%",
              border: "0px solid",
              background: "linear-gradient(to bottom right, #ffcc00, #ff00cc)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <Image
              width={65}
              height={60}
              style={{
                border: "2px solid #000",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="avatar"
              loading="lazy"
            />
          </Box>
        ))}
      </div>
    </header>
  );
}
