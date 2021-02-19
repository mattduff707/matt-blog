import React from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import categories from "../constants/constants"
import Heading from "../components/heading"

const PageContainer = styled.section`
  border: black 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 100px;
`

const CategoryContainer = styled.div`
  display: flex;
  border: blue dotted 2px;
`
const FlexHeading = styled(Heading)`
  width: 100%;
  border: red solid 2px;
`

// const BlogPost = styled.li`
//   border-bottom: 2px indianred solid;
//   margin-bottom: 30px;
//   /* background-color: #d3d3d3;
//   padding: 3px 5px; */
// `

// const BlogTitle = styled.h3`
//   color: indianred;
// `

// const PublishedDate = styled.p`
//   color: #333;
//   text-decoration: none;
//   font-size: 0.8rem;
// `

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `
// const PostWrapper = styled.div`
//   padding: 25px 50px;
//   background-color: transparent;
//   ${StyledLink}:hover & {
//     background-color: #d3d3d3;
//   }
// `

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
        <Heading size={"3rem"} level={2} margin={"20px 0px 20px 0px"}>
          Articles
        </Heading>

        {categories.map(cat => {
          return (
            <CategoryContainer key={`category-${cat}`}>
              <FlexHeading size={"2em"}>{cat}</FlexHeading>
              <div>
                {data.allMarkdownRemark.edges.map(edge => {
                  return edge.node.frontmatter.category === cat ? (
                    <div key={`post-${edge.node.frontmatter.title}`}>
                      {edge.node.frontmatter.title}
                    </div>
                  ) : null
                })}
              </div>
            </CategoryContainer>
          )
        })}

        {/*         
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
          })} */}
      </PageContainer>
    </Layout>
  )
}

export default Posts
