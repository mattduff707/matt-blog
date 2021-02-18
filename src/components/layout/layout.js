import React from "react"
import styled, {createGlobalStyle} from "styled-components"

import Nav from "./nav"
import Accessibility from './accessibility'
import About from './about'

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: #383838;
    --color-primary: indianRed;
    --color-secondary: wheat;
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
  "navigation main"
  "accessibility main"
  "about main"
  ;
`
const MainCell = styled.main`
  grid-area: main;
  
`

const layout = ({ children }) => {
  return (
    <PageContainer>
      <GlobalStyles />
      <header>
        <Nav />
        <Accessibility />
        <About />
      </header>
      <MainCell>{children}</MainCell>
      <footer></footer>
    </PageContainer>
  )
}

export default layout
