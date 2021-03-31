import React from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

const Liner = styled.div`
  width: 0px;
  height: 7px;
  background-color: var(--color-accent);
  transition: width 500ms ease;
  position: absolute;
  bottom: 0;
  left: 0;
`

const PageContainer = styled.section`
  background-color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 100px;
  min-height: 100vh;
  @media (max-width: 1024px) {
    padding: 0px 20px;
  }
`
const PageHeading = styled.h1`
  font-size: 3rem;
  margin: 55px auto 20px auto;
`

const CategoryContainer = styled.div`
  display: flex;

  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    justify-content: center;
  }
`
const CategoryHeading = styled.h2`
  width: 100%;
  font-size: 2.2rem;
  border-bottom: var(--color-alternative) solid 2px;
  margin-bottom: 30px;
`
const PostHeading = styled.h3`
  font-size: 1.2em;
  color: var(--color-accent);
  margin: 0px 0px 5px 0px;
  transition: color 500ms ease;
`

const Post = styled.div`
  position: relative;
  width: 300px;
  height: 100%;
  padding: 25px;

  background-color: var(--color-primary);
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-secondary);
  transition: color 500ms ease;

  margin: 15px 15px 0px 0px;

  &:hover,
  &:focus {
    color: var(--color-alternative);
    transition: color 500ms ease;
  }
  &:hover ${PostHeading}, &:focus ${PostHeading} {
    color: var(--color-alternative);
    transition: color 500ms ease;
  }
  &:hover ${Liner}, &:focus ${Liner} {
    width: 100%;
    transition: width 500ms ease;
  }

  &:last-child {
    margin-right: 0px;
  }
  @media (max-width: 600px) {
    margin-right: 0px;
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

  const categoriesArr = data.allMarkdownRemark.edges.reduce((newArr, edge) => {
    const category = edge.node.frontmatter.category
    // If a category is not already present in the array already (Which would return -1), it is pushed to the array.
    if (newArr.indexOf(category) === -1) {
      newArr.push(category)
    }
    return newArr
  }, [])

  return (
    <Layout>
      <PageContainer>
        <PageHeading>Notes</PageHeading>

        {categoriesArr.map(cat => {
          return (
            <CategoryContainer key={`category-${cat}`}>
              <CategoryHeading>{cat}</CategoryHeading>
              {data.allMarkdownRemark.edges.map(edge => {
                return edge.node.frontmatter.category === cat ? (
                  <StyledLink
                    to={edge.node.fields.slug}
                    key={`post-${edge.node.frontmatter.title}`}
                  >
                    <Post>
                      <PostHeading>{edge.node.frontmatter.title}</PostHeading>
                      <p>{edge.node.frontmatter.description}</p>
                      <Liner />
                    </Post>
                  </StyledLink>
                ) : null
              })}
            </CategoryContainer>
          )
        })}
      </PageContainer>
    </Layout>
  )
}

export default Posts
