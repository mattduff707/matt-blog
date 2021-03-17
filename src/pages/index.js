import React from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"

const ContentCell = styled.section`
  height: 100%;
  background-color: var(--color-secondary);
`

export default function Home() {
  return (
    <Layout>
      <ContentCell>
        <p>Content</p>
      </ContentCell>
    </Layout>
  )
}
