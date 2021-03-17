import React from "react"
import styled from "styled-components"

const Btn = styled.button`
  color: var(--color-secondary);
  position: fixed;
  top: 10px;
  right: 20px;
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
  display: ${props => (props.isMenuOpen ? "visible" : "none")};
  @media (min-width: 1023px) {
    display: none;
  }
`

const CloseMenuBtn = ({ children, clickToCloseMenu, isMenuOpen }) => {
  return (
    <Btn onClick={clickToCloseMenu} isMenuOpen={isMenuOpen}>
      {children}
    </Btn>
  )
}

export default CloseMenuBtn
