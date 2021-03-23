import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavCell = styled.nav`
  display: flex;
  justify-content: center;
  height: 100%;
  border-bottom: var(--color-secondary) 2px solid;
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
const UnderLiner = styled.div`
  width: 0px;
  height: 2px;
  background-color: var(--color-accent);
  transition: width 400ms ease;
`
const LinkContainer = styled.li`
  margin: 20px auto;
  text-align: center;
`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--color-secondary);
  font-size: 1.8rem;
  border: 2px transparent solid;
  padding: 15px 25px 5px 25px;
  &:hover ${UnderLiner} {
    width: 100%;
    transition: width 400ms ease;
  }
`

const nav = ({ clickToCloseMenu }) => {
  return (
    <NavCell>
      <NavUl>
        <LinkContainer>
          <StyledLink onClick={clickToCloseMenu} to="/">
            Main
            <UnderLiner />
          </StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink onClick={clickToCloseMenu} to="/posts">
            Notes
            <UnderLiner />
          </StyledLink>
        </LinkContainer>
      </NavUl>
    </NavCell>
  )
}

export default nav
