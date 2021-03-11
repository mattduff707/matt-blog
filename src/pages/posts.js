import React from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import Heading from "../components/heading"

const PageContainer = styled.section`
  background-color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 100px;
  min-height: 100vh;
`

const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 10px;
`
const FlexHeading = styled(Heading)`
  width: 100%;
  border-bottom: var(--color-alternative) solid 2px;
  margin-bottom: 10px;
`
const Post = styled.div`
  width: 300px;
  padding: 25px;
  border: var(--color-primary) 4px solid;
  background-color: var(--color-alternative);
  transition: color 250ms ease, border 250ms ease, background-color 250ms ease;
  &:hover {
    border: 4px solid var(--color-alternative);
    background-color: var(--color-primary);
    color: var(--color-alternative);
    .post-heading {
      color: var(--color-text);
      transition: color 500ms ease;
    }
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-text);

  margin-right: 10px;
  &:last-child {
    margin-right: 0;
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
              date
              category
              tags
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // const categoriesArr = []

  // data.allMarkdownRemark.edges.forEach(edge => {
  //   const category = edge.node.frontmatter.category

  //   if (categoriesArr.indexOf(category) === -1) {
  //     categoriesArr.push(category)
  //   }
  // * return categoriesArr.includes(edge.node.frontmatter.category)
  // * ? null
  // * : categoriesArr.push(edge.node.frontmatter.category)
  // })

  const categoriesArr = data.allMarkdownRemark.edges.reduce((newArr, edge) => {
    const category = edge.node.frontmatter.category
    if (newArr.indexOf(category) === -1) {
      newArr.push(category)
    }
    return newArr
  }, [])

  // console.log(categoriesArr)

  return (
    <Layout>
      <PageContainer>
        <Heading size={"3rem"} level={2} margin={"20px auto 20px auto"}>
          Articles
        </Heading>

        {categoriesArr.map(cat => {
          return (
            <CategoryContainer key={`category-${cat}`}>
              <FlexHeading size={"2.2rem"} level={3}>
                {cat}
              </FlexHeading>
              {data.allMarkdownRemark.edges.map(edge => {
                return edge.node.frontmatter.category === cat ? (
                  <StyledLink to={edge.node.fields.slug}>
                    <Post key={`post-${edge.node.frontmatter.title}`}>
                      <Heading
                        className="post-heading"
                        level={4}
                        size={"1.2rem"}
                        margin={"0px 0px 5px 0px"}
                        primary
                      >
                        {edge.node.frontmatter.title}
                      </Heading>
                      <p>{edge.node.frontmatter.description}</p>
                    </Post>
                  </StyledLink>
                ) : null
              })}
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
