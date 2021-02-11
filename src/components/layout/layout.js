import React from "react"
import styled from "styled-components"
import "./layout.css"
import Nav from "./nav"

const PageContainer = styled.div`
  min-height: 100vh;
`

const layout = ({ children }) => {
  return (
    <PageContainer>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer></footer>
    </PageContainer>
  )
}

export default layout
