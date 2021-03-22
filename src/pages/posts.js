import React from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

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
  &:hover {
    color: var(--color-alternative);
  }
`

const Post = styled.div`
  width: 300px;
  height: 100%;
  padding: 25px;
  border: var(--color-alternative) 4px solid;
  background-color: var(--color-primary);
  transition: color 500ms ease, border 500ms ease, background-color 500ms ease;
  .post-heading {
    transition: color 500ms ease;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-secondary);

  margin: 10px 10px 0px 0px;

  &:hover {
    color: var(--color-alternative);
  }
  &:hover ${PostHeading} {
    color: var(--color-alternative);
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
                      <PostHeading className="post-heading">
                        {edge.node.frontmatter.title}
                      </PostHeading>
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
