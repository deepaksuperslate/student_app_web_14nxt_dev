
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function AssignmentLayout({ children }: Props) {
  return (
    <>
      {/* <HeaderGen /> */}
      {/* <Sidebar /> */}
      {children}
      
    </>
  );
}