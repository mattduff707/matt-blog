import React from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

const PageContainer = styled.section`
  border: black 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 100px;
`
const Heading = styled.h2`
  font-size: 2rem;
  text-decoration: underline;
  margin-bottom: 0px;
`

const BlogContainer = styled.ol`
  list-style: none;
`

const BlogPost = styled.li`
  border-bottom: 2px indianred solid;
  margin-bottom: 30px;
  /* background-color: #d3d3d3;
  padding: 3px 5px; */
`

const BlogTitle = styled.h3`
  color: indianred;
`

const PublishedDate = styled.p`
  color: #333;
  text-decoration: none;
  font-size: 0.8rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`
const PostWrapper = styled.div`
  padding: 25px 50px;
  background-color: transparent;
  ${StyledLink}:hover & {
    background-color: #d3d3d3;
  }
`

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
              date
              category
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <PageContainer>
        <Heading>Articles</Heading>
        <BlogContainer>
          {data.allMarkdownRemark.edges.map(edge => {
            const edgeNode = edge.node
            return (
              <BlogPost key={edgeNode.frontmatter.title}>
                <StyledLink to={edgeNode.fields.slug}>
                  <PostWrapper>
                    <BlogTitle>{edgeNode.frontmatter.title}</BlogTitle>
                    <PublishedDate>{edgeNode.frontmatter.date}</PublishedDate>
                  </PostWrapper>
                </StyledLink>
              </BlogPost>
            )
          })}
        </BlogContainer>
      </PageContainer>
    </Layout>
  )
}

export default Posts
