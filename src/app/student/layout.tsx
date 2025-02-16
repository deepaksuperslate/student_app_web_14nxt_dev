
'use client';
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from '../../lib/store';

interface Props {
  children: ReactNode;
}

export default async function StudentLayout({ children }: Props) {
  return (
    <>
      {/* <HeaderGen /> */}
      {/* <Sidebar /> */}
      
      <Provider store={store}>
        {children}
      </Provider>
      
    </>
  );
}