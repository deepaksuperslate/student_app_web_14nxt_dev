
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function StudentLayout({ children }: Props) {
  return (
    <>
      {/* <HeaderGen /> */}
      {/* <Sidebar /> */}
      {children}
    </>
  );
}