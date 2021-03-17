import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import "../../markdown.css"
import Nav from "./nav"
import ContentNav from "./contentNav"
import OpenMenuBtn from "./openMenuBtn"
import CloseMenuBtn from "./closeMenuBtn"

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: #f6aa1c;
    --color-primary: hsl(16.4, 97.3%, 28.8%);
    --color-secondary: #f6aa1c;
    --color-alternative: #220901;
    --text-blog-post: 1.1rem;
    
    @media(max-width: 768px) {
      --text-blog-post: 1rem
    }

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
  border-right: 2px solid var(--color-alternative);
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
