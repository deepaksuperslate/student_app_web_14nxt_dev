
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function QuizLayout({ children }: Props) {
  return (
    <>
      {/* <HeaderGen /> */}
      {/* <Sidebar /> */}
      {children}
      
    </>
  );
}