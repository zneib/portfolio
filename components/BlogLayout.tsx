import React from "react";
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
`

type BlogLayoutProps = {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <Nav>
      {children}
    </Nav>
  )
}