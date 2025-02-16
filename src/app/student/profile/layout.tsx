
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function ProfileLayout({ children }: Props) {
  return (
    <>
      {/* <HeaderGen /> */}
      {/* <Sidebar /> */}
      {children}
      
    </>
  );
}