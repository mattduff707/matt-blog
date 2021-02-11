import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100vw;
  list-style: none;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`

const LinkContainer = styled.li`
  margin: 0px 5px;
  text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  border: 2px transparent solid;
  padding: 15px 25px;
  &:hover {
    border: 2px red solid;
  }
`

const nav = () => {
  return (
    <nav>
      <NavUl>
        <LinkContainer>
          <StyledLink to="/">Main</StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/posts">Articles</StyledLink>
        </LinkContainer>
      </NavUl>
    </nav>
  )
}

export default nav
