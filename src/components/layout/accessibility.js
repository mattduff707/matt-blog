import React from "react"
import styled from "styled-components"
import Heading from "../heading"

const AccessibilityCell = styled.aside`
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ButtonsUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
const Test = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Accessibility = () => {
  return (
    <AccessibilityCell>
      <Test>
        <Heading level={1} secondary>
          Settings
        </Heading>
      </Test>
      <ButtonsUl>
        <button value={"dark"}>Theme</button>
        <button value={"light"}>Text Size</button>
      </ButtonsUl>
    </AccessibilityCell>
  )
}

export default Accessibility
