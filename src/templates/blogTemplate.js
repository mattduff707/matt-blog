import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const BlogTemplate = ({ data }) => {
  const markdownRemark = data.markdownRemark

  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <p>{markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
    </Layout>
  )
}

export default BlogTemplate
