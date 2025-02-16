'use client';
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function NotebookLayout({ children }: Props) {
  return (
    <>
      {/* <HeaderGen /> */}
      {/* <Sidebar /> */}
      {children}
      
    </>
  );
}