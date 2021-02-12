import React from "react"
import styled from "styled-components"
import "./layout.css"
import Nav from "./nav"
import ArticleBrowser from "./articleBrowser"

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: [navlinks] 1fr [articles] 1fr;
  grid-template-columns: [navigation] 300px;
`

const layout = ({ children }) => {
  return (
    <PageContainer>
      <header>
        <Nav />
        <ArticleBrowser />
      </header>
      <main>{children}</main>
      <footer></footer>
    </PageContainer>
  )
}

export default layout
