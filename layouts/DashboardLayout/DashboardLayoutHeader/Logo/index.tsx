import React from 'react'

const Logo = () => (
  <picture style={{ height: 25 }}>
    <source
      media="(min-width: 768px) and (prefers-color-scheme: dark)"
      srcSet="/icons/kanban-light.svg"
    />
    <source
      media="(min-width: 768px) and (prefers-color-scheme: light)"
      srcSet="/icons/kanban-dark.svg"
    />

    <img
      src="/icons/kanban-mobile.svg"
      alt="Themed Image"
    />
  </picture>
)

export default Logo
