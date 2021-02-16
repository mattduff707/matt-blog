import React from 'react'
import styled from 'styled-components'


const AboutCell = styled.aside`
    height: 100%;
    width: 100%;
    background-color: green;
    grid-area: about;
`

const About = () => {
    return (
        <AboutCell>
            <p>About!</p>
        </AboutCell>
    )
}

export default About
