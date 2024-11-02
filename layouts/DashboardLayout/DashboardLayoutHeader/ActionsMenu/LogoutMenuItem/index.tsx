"use client"
import { MenuItem, rem } from '@mantine/core'
import { IconLogout } from '@tabler/icons-react'
import React from 'react'
import { logoutAction } from './logout-action'

import styles from './LogoutMenuItem.module.scss'

const LogoutMenuItem = () => {
  const logoutIcon = <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />

  return (
    <MenuItem leftSection={logoutIcon}>
      <form action={logoutAction}>
        <input type="submit" name="Logout" value="logout" className={styles.logoutInput} />
      </form>
    </MenuItem>
  )
}

export default LogoutMenuItem
