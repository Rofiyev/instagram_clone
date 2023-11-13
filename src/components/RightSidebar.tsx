import { Box, Button, Flex, Text } from "@mantine/core";
import Image from "next/image";

export default function RightSidebar(): JSX.Element {
  return (
    <section
      style={{
        width: "35%",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "95vh",
      }}
    >
      <main>
        <Flex justify={"flex-start"} ml={"10px"} align={"center"} gap={"10px"}>
          <Box
            w={"85px !important"}
            h={"85px !important"}
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
              width={80}
              height={80}
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
          <Box>
            <Text size="sm">rof1yev</Text>
            <Text size="lg" color="gray">
              Rofiyev Dilshod
            </Text>
          </Box>
        </Flex>
        <Flex justify={"space-between"} my={"10px"}>
          <Text size="lg" style={{ fontSize: "14px" }} color="gray">
            Suggested for you
          </Text>
          <Text
            size="sm"
            c="blue"
            style={{ fontSize: "14px", cursor: "pointer" }}
          >
            See All
          </Text>
        </Flex>
        <Box>
          {[...Array(5)].map((_, i) => (
            <Flex key={i} align={"center"} justify={"space-between"}>
              <Flex
                justify={"flex-start"}
                m={"10px 0 10px 10px"}
                align={"center"}
                gap={"10px"}
              >
                <Box
                  w={"55px !important"}
                  h={"55px !important"}
                  style={{
                    borderRadius: "50%",
                    border: "0px solid",
                    background:
                      "linear-gradient(to bottom right, #ffcc00, #ff00cc)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  <Image
                    width={50}
                    height={50}
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
                <Box>
                  <Text size="sm">rof1yev</Text>
                  <Text size="lg" color="gray">
                    Rofiyev Dilshod
                  </Text>
                </Box>
              </Flex>
              <Button
                variant="light"
                style={{ fontSize: "14px", cursor: "pointer" }}
              >
                Follow
              </Button>
            </Flex>
          ))}
        </Box>
      </main>

      <footer>
        <Text>© {new Date().getFullYear()} INSTAGRAM FROM META</Text>
      </footer>
    </section>
  );
}
