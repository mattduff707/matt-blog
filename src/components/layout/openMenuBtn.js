import React from "react"
import styled from "styled-components"

const Btn = styled.button`
  color: var(--color-secondary);
  background-color: var(--color-primary);
  border: 2px solid var(--color-alternative);
  padding: 10px;
  font-size: 1.2rem;
  position: fixed;
  top: 5px;
  right: 20px;
  display: ${props => (props.isMenuOpen ? "none" : "visible")};
  @media (min-width: 1023px) {
    display: none;
  }
`

const OpenMenuBtn = ({ children, clickToOpenMenu, isMenuOpen }) => {
  return (
    <Btn onClick={clickToOpenMenu} isMenuOpen={isMenuOpen}>
      {children}
    </Btn>
  )
}

export default OpenMenuBtn
