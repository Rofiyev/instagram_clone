import { Header, Sidebar } from "@/components";
import React from "react";
import { ReactNode } from "react";
import { Container, Skeleton } from "@mantine/core";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <section>
        <Sidebar />
      </section>
      <main>
        <Header />
        <Skeleton height={50} circle mb="xl" />
        <Container px={0} size="30rem">
          30rem Container without padding
        </Container>
      </main>
    </div>
  );
}
