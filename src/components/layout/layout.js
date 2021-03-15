import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import "../../markdown.css"
import Nav from "./nav"
import ContentNav from "./contentNav"

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: #f6aa1c;
    --color-primary: hsl(16.4, 97.3%, 28.8%);
    --color-secondary: #f6aa1c;
    --color-alternative: #220901;
    --text-blog-post: 1.2em;

  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *:before, *:after {
    box-sizing: border-box
  }
`

const PageContainer = styled.div`
  height: 100vh;
  overflow: hidden;
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
  grid-template-rows: 1fr 2fr;
`
const MainCell = styled.main`
  grid-area: main;
  overflow-y: scroll;
  scroll-behavior: smooth;
`

const Layout = ({ children, shortcuts }) => {
  return (
    <PageContainer>
      <GlobalStyles />
      <HeaderWrapper>
        <Nav />
        <ContentNav shortcuts={shortcuts} />
      </HeaderWrapper>
      <MainCell>{children}</MainCell>
    </PageContainer>
  )
}

export default Layout
