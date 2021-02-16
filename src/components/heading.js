import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Heading = ({
  children,
  level,
  size,
  margin,
  className,
  primary,
  secondary,
}) => {
  const tag = `h${level}`

  return (
    <StyledHeading
      primary={primary}
      secondary={secondary}
      size={size}
      className={className}
      margin={margin}
      as={tag}
    >
      {children}
    </StyledHeading>
  )
}

const StyledHeading = styled.h2`
  color: ${props =>
    props.primary
      ? "var(--color-primary)"
      : props.secondary
      ? "var(--color-secondary)"
      : "black"};
  font-size: ${props => props.size};
  margin: ${props => props.margin};
`

Heading.propTypes = {
  level: PropTypes.number, //Specifying 1-6 not necessary due to console error if any html heading is not 1-6
  className: PropTypes.string,
}

export default Heading
