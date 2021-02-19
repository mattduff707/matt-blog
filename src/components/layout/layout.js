import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"

import Nav from "./nav"
import Accessibility from "./accessibility"
import About from "./about"

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: #f6aa1c;
    --color-primary: #bc3908;
    --color-secondary: #f6aa1c;
    --color-alternative: #220901;
    --text-blog-post: 1.2em;

  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const PageContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "header main"
    "header main"
    "header main";
`
const HeaderWrapper = styled.header`
  border-right: 2px solid var(--color-alternative);
  grid-area: header;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`
const MainCell = styled.main`
  grid-area: main;
`

const Layout = ({ children }) => {
  return (
    <PageContainer>
      <GlobalStyles />
      <HeaderWrapper>
        <Nav />
        <Accessibility />
        <About />
      </HeaderWrapper>
      <MainCell>{children}</MainCell>
    </PageContainer>
  )
}

export default Layout
