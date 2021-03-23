import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import "../../markdown.css"
import Nav from "./nav"
import ContentNav from "./contentNav"
import OpenMenuBtn from "./openMenuBtn"
import CloseMenuBtn from "./closeMenuBtn"

const GlobalStyles = createGlobalStyle`
  html {
    --color-text-dark: hsl(0, 1%, 26%);
    --color-primary: hsl(0, 1%, 26%);
    --color-secondary: hsl(55, 48%, 90%);
    --color-alternative: hsl(0, 100%, 50%);
    --color-accent: hsl(169, 94%, 71%);
    --text-blog-post: 1.2em;

  }
  body {
    background-color: var(--color-primary)
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
  grid-template-rows: 1fr 1fr 100px;
  grid-template-areas:
    "header main"
    "header main"
    "header main";
  @media (max-width: 1023px) {
    grid-template-columns: ${props =>
      props.isMenuOpen ? "1fr 0px" : "0px 1fr;"};
  }
`
const HeaderWrapper = styled.header`
  border-right: 8px solid var(--color-primary);
  border-left: 8px solid var(--color-primary);
  grid-area: header;
  display: grid;
  grid-template-rows: 1fr 2fr;
`
const MainCell = styled.main`
  grid-area: main;
  overflow-y: scroll;
`

const Layout = ({ children, shortcuts }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const clickToOpenMenu = () => {
    setOpenMenu(() => {
      return true
    })
  }
  const clickToCloseMenu = () => {
    setOpenMenu(() => {
      return false
    })
  }

  return (
    <PageContainer isMenuOpen={openMenu}>
      <GlobalStyles />
      <HeaderWrapper>
        <OpenMenuBtn isMenuOpen={openMenu} clickToOpenMenu={clickToOpenMenu}>
          Menu
        </OpenMenuBtn>
        <CloseMenuBtn isMenuOpen={openMenu} clickToCloseMenu={clickToCloseMenu}>
          x
        </CloseMenuBtn>
        <Nav clickToCloseMenu={clickToCloseMenu} />
        <ContentNav clickToCloseMenu={clickToCloseMenu} shortcuts={shortcuts} />
      </HeaderWrapper>
      <MainCell>{children}</MainCell>
    </PageContainer>
  )
}

export default Layout
