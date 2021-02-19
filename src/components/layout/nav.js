import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavCell = styled.nav`
  display: flex;
  justify-content: center;
  height: 100%;
`

const NavUl = styled.ul`
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  list-style: none;
  padding: 20px 0px;
`

const LinkContainer = styled.li`
  margin: 20px 5px;
  text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-secondary);
  font-size: 1.8rem;
  border: 2px transparent solid;
  padding: 15px 25px 5px 25px;
  &:hover {
    border-bottom: 2px var(--color-alternative) solid;
  }
`

const nav = () => {
  return (
    <NavCell>
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
    </NavCell>
  )
}

export default nav
