
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function AssignmentLayout({ children }: Props) {
  return (
    <div className="max-w-screen-xl mx-auto xl:p-0 p-4">
      {children}
    </div>
  );
}