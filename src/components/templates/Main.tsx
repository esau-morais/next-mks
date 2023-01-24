"use client";

import { ReactNode } from "react";

import styled from "styled-components";

const Container = styled.main`
  padding: 4rem 18%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(218px, 1fr));
  gap: 1.25rem;
`;

const Main = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default Main;
