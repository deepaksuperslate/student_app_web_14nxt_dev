
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function TeacherDashboardLayout({ children }: Props) {
  return (
    <>
      {/* <HeaderGen /> */}
      {/* <Sidebar /> */}
      {children}
    </>
  );
}