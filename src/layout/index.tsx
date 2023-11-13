import { Header, Sidebar } from "@/components";
import React from "react";
import { ReactNode } from "react";
import { Skeleton } from "@mantine/core";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <section>
        <Sidebar />
      </section>
      <main>{children}</main>
    </div>
  );
}
