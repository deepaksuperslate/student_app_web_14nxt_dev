
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function MaterialLayout({ children }: Props) {
  return (
    <>
      {/* <HeaderGen /> */}
      {/* <Sidebar /> */}
      {children}
      
    </>
  );
}