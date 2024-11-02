import { Anchor } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const Logo = () => (
  <Anchor component={Link} href='/' underline='never'>
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
  </Anchor>
)

export default Logo
