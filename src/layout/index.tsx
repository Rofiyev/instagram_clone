import { Header,Sidebar } from "@/components";
import React from "react";
import { ReactNode } from "react";
import { Skeleton } from '@mantine/core';


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <section>
        <Sidebar />
      </section>
      <main>
        <Header />
        <Skeleton height={50} circle mb="xl" />
        {children}
      </main>
    </div>
  );
}
