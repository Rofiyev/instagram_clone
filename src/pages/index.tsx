import { Header, PostCard, RightSidebar } from "@/components";
import { IPosts, IStorys } from "@/interface";
import Layout from "@/layout";
import { getPosts, getStorys } from "@/modules/auth/api";
import useProfile from "@/modules/auth/use-profile";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home(): JSX.Element {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [storys, setStorys] = useState<IStorys[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getPosts();
      const res = await getStorys();
      setStorys(res.data);
      setPosts(data);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <Layout>
        <main style={{ display: "flex", width: "100%", gap: "10px" }}>
          <div style={{ width: "65%" }}>
            <Header storys={storys} />
            <div style={{ marginTop: "40px" }}>
              {posts?.map((item: IPosts, i: number) => (
                <PostCard item={item} key={i} />
              ))}
            </div>
          </div>
          <RightSidebar />
        </main>
      </Layout>
    </>
  );
}
