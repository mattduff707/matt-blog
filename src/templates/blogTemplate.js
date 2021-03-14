import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import Heading from "../components/heading"
import { makeDateMachineFormat } from "../constants/helpers"

const Wrapper = styled.div`
  background-color: var(--color-text);
  min-height: 100vh;
`
const PostWrapper = styled.article`
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;

  & > * {
    grid-column: 2;
  }
`

const Content = styled.div`
  line-height: 2;
  padding: 30px 0px;
  font-family: "monospace";
`

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        tags
      }
      html
    }
  }
`
/*TODO*/
/*Add sticky top nav for quickly navigating between sections of notes. */
/*Research adding a vocab tooltip link on keywords*/
const BlogTemplate = ({ data }) => {
  const markdownRemark = data.markdownRemark
  const valuesArr = []

  useEffect(() => {
    const elementsArr = document.querySelectorAll(".heading-two")

    elementsArr.forEach(e => {
      valuesArr.push(e.innerText)
    })
  })

  return (
    <Layout contentNav={valuesArr}>
      <Wrapper>
        <PostWrapper>
          <Heading size={"2.5em"} level={1} margin={"20px 0px 5px 0px"}>
            {markdownRemark.frontmatter.title}
          </Heading>
          <time
            dateTime={makeDateMachineFormat(markdownRemark.frontmatter.date)}
            size={"1em"}
            level={2}
            margin={"0px 0px 20px 0px"}
          >
            {markdownRemark.frontmatter.date}
          </time>
          <Content
            dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
          ></Content>
        </PostWrapper>
      </Wrapper>
    </Layout>
  )
}

export default BlogTemplate
