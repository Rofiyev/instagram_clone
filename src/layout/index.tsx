import { Header, Sidebar } from "@/components";
import React from "react";
import { ReactNode } from "react";
import { Container } from "@mantine/core";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div style={{ display: "flex" }}>
      <section>
        <Sidebar />
      </section>
      <main>
        <Container px={10} size="30rem" style={{ marginInline: "auto" }}>
          {children}
        </Container>
      </main>
    </div>
  );
}
