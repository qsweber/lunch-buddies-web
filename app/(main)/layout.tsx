"use client";

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { NavBar } from "../components/NavBar";

const Main = styled.main(() => ({
  fontSize: 18,
  fontFamily: "Inter",
  fontWeight: 400,
  maxWidth: 750,
  width: "100%",
  margin: "0px auto",
  padding: "0px 5px",
}));

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Main>
        <NavBar />
        {children}
      </Main>
    </div>
  );
}
