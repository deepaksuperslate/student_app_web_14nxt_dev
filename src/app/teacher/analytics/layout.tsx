
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function TeacherAnalyticsLayout({ children }: Props) {
  return (
    <>
      {/* <HeaderGen /> */}
      {/* <Sidebar /> */}
      {children}
    </>
  );
}