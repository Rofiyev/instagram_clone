import Layout from "@/layout";
import { Api } from "@/modules/auth";
import { Flex, InputBase, Text } from "@mantine/core";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Search(): JSX.Element {
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState([]);

  const navigete = useRouter();

  const handleSearchChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSearch(value);
    console.log(value);

    try {
      const { data }: any = await Api.SearchUser(search);

      console.log(data);

      setUsers(data);
    } catch (error: any) {}
  };

  return (
    <>
      <Head>
        <title>Instagram | Search</title>
      </Head>
      <Layout>
        <h1>Search</h1>
        <Flex
          w="100%"
          gap={20}
          direction="column"
          align="center"
          justify="center"
          h="100vh"
        >
          <InputBase
            w="100%"
            placeholder="search..."
            value={search}
            onChange={handleSearchChange}
          />

          <Flex align="center" direction="column" gap={20} h="100vh" w="100%">
            {users.map((item: any) => (
              <Flex
                onClick={() => {
                  navigete.push(`/user/${item.username}`);
                }}
                w="100%"
                bg="red"
                align="center"
                key={item.id}
              >
                <img
                  src={item.image}
                  width={100}
                  height={100}
                  style={{ borderRadius: "50%" }}
                  alt=""
                />
                <Text>{item.username}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Layout>
    </>
  );
}
