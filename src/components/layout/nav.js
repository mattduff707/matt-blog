import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FlexNav = styled.nav`
  display: flex;
  justify-content: flex-start;
`

const NavUl = styled.ul`
  background-color: #c44244;
  display: flex;
  flex-direction: column;
  height: 50vh;
  min-width: 400px;
  list-style: none;
  padding: 20px 0px;
`

const LinkContainer = styled.li`
  margin: 0px 5px;
  text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: "El Messiri", sans-serif;
  color: #f2d4b0;
  font-size: 1.8rem;
  border: 2px transparent solid;
  padding: 15px 25px 5px 25px;
  &:hover {
    border-bottom: 3px #42c4b5 solid;
  }
`

const nav = () => {
  return (
    <FlexNav>
      <NavUl>
        <LinkContainer>
          <StyledLink to="/">Main</StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/posts">Articles</StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/about">About</StyledLink>
        </LinkContainer>
      </NavUl>
    </FlexNav>
  )
}

export default nav
