import React from "react";
import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  padding: 50px 100px;
  display: inline-block;
  & > h3 {
    color: #000;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    width: 100vw;
    padding: 10px 20px;
  }
  @media (prefers-color-scheme: dark) {
    & > h3 {
      color: var(--gray-nine);
    }
  }
`

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Main>
      {children}
    </Main>
  )
}