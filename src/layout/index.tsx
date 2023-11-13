import { LeftSidebar } from "@/components";
import React from "react";
import { ReactNode } from "react";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "1500px",
        margin: "0 auto",
        overflowX: "hidden",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <section>
        <LeftSidebar />
      </section>
      <main style={{ padding: "20px", width: "calc(100% - 280px)" }}>
        {children}
      </main>
    </div>
  );
}
