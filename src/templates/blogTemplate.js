import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import styled from "styled-components"
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
  @media (max-width: 767px) {
    padding: 0px 15px;
  }
`
const PostHeading = styled.h1`
  font-size: 2.5rem;
  margin: 20px 0px 5px 0px;
  @media (max-width: 1023px) {
    font-size: 2rem;
    margin-top: 55px;
  }
`

const Content = styled.div`
  line-height: 2;
  font-size: var(--text-blog-post);
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
  const headersArr = []

  useEffect(() => {
    const elementsArr = document.querySelectorAll(".heading-two")

    elementsArr.forEach(e => {
      headersArr.push(e)
    })
  })

  return (
    <Layout shortcuts={headersArr}>
      <Wrapper>
        <PostWrapper>
          <PostHeading>{markdownRemark.frontmatter.title}</PostHeading>
          <time
            dateTime={makeDateMachineFormat(markdownRemark.frontmatter.date)}
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
