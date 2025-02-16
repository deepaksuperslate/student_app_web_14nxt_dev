
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function TeacherLayout({ children }: Props) {
  return (
    <div >
      {children}
    </div>
  );
}