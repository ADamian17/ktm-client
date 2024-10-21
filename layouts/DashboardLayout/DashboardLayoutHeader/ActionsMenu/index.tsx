import { ActionIcon, Menu, MenuDivider, MenuDropdown, MenuItem, MenuLabel, MenuTarget, rem } from '@mantine/core'
import { IconDotsVertical, IconLogout } from '@tabler/icons-react'
import React from 'react'

const ActionsMenu = () => {
  return (
    <Menu shadow="md" width={200} position='bottom-end' offset={25}>
      <MenuTarget>
        <ActionIcon variant='transparent' color='#979797'>
          <IconDotsVertical size={20} />
        </ActionIcon>
      </MenuTarget>

      <MenuDropdown>
        <MenuLabel>Board</MenuLabel>
        <MenuItem>Edit Board</MenuItem>
        <MenuItem color="red">Delete Board</MenuItem>
        <MenuDivider />

        <MenuLabel>Settings</MenuLabel>
        <MenuItem
          leftSection={
            <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          }
        >
          Logout
        </MenuItem>
      </MenuDropdown>
    </Menu>
  )
}

export default ActionsMenu
