import React from "react"
import styled from 'styled-components'
import Heading from '../heading'

const AccessibilityCell = styled.aside`
  grid-area: accessibility;
  width: 100%;
  height: 100%;
  background-color: wheat;
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



const Accessability = () => {
  return (
    <AccessibilityCell>
      <Test>
        <Heading level={1} >Settings</Heading>
      </Test>
      <ButtonsUl>
        <button>Theme</button>
        <button>Text Size</button>
      </ButtonsUl>
    </AccessibilityCell>
    )
}

export default Accessability
