
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function TeacherMonitoringLayout({ children }: Props) {
  return (
    <>
      {/* <HeaderGen /> */}
      {/* <Sidebar /> */}
      {children}
    </>
  );
}