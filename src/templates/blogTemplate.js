import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import Heading from "../components/heading"

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
const Wrapper = styled.div`
  background-color: var(--color-text);
  min-height: 100vh;
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

const BlogTemplate = ({ data }) => {
  const markdownRemark = data.markdownRemark
  return (
    <Layout>
      <Wrapper>
        <PostWrapper>
          <Heading size={"2.5em"} level={1} margin={"20px 0px 5px 0px"}>
            {markdownRemark.frontmatter.title}
          </Heading>
          <Heading size={"1em"} level={2} margin={"0px 0px 20px 0px"}>
            {markdownRemark.frontmatter.date}
          </Heading>
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
        </PostWrapper>
      </Wrapper>
    </Layout>
  )
}

export default BlogTemplate
