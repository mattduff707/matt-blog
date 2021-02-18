import React from "react"
import styled from 'styled-components'
import Heading from '../heading'

const AccessibilityCell = styled.aside`
  grid-area: accessibility;
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



const Accessibility = ({changeTheme}) => {
  return (
    <AccessibilityCell>
      <Test>
        <Heading level={1} >Settings</Heading>
      </Test>
      <ButtonsUl>
        <button onClick={changeTheme} value={'dark'}>Theme</button>
        <button onClick={changeTheme} value={'light'}>Text Size</button>
      </ButtonsUl>
    </AccessibilityCell>
    )
}

export default Accessibility
