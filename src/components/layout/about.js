import React from "react"
import styled from "styled-components"

const AboutCell = styled.aside`
  color: var(--color-text);
  height: 100%;
  width: 100%;
  background-color: var(--color-primary);
`

const About = () => {
  return (
    <AboutCell>
      <p>About!</p>
    </AboutCell>
  )
}

export default About
