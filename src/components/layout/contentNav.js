import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Wrapper = styled.nav`
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Heading = styled.h2`
  font-size: 1.2em;
  color: var(--color-secondary);
  padding: 15px 0px;
`
const List = styled.ol`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`
const ListItem = styled.li`
  text-align: center;
  width: 100%;
  color: var(--color-secondary);
  &:hover {
    color: var(--color-alternative);
  }
`
const Shortcut = styled.a`
  color: inherit;
  text-decoration: none;
  width: 100%;
  display: block;
  padding: 10px;
`

const ContentNav = ({ shortcuts, clickToCloseMenu }) => {
  const [shortcutLinks, setShortcutLinks] = useState([])

  useEffect(() => {
    setShortcutLinks(() => {
      return shortcuts
    })
  }, [shortcuts, shortcutLinks])

  if (shortcuts) {
    return (
      <Wrapper>
        <Heading>Shortcuts</Heading>
        <List>
          {shortcutLinks.map(e => {
            return (
              <ListItem key={`shortcut-${e.id}`}>
                <Shortcut onClick={clickToCloseMenu} href={`#${e.id}`}>
                  {e.innerText}
                </Shortcut>
              </ListItem>
            )
          })}
        </List>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <p>Category filters and search feature will appear here!</p>
      </Wrapper>
    )
  }
}

export default ContentNav
