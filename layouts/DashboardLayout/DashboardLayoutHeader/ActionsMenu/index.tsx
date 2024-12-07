import { ActionIcon, Menu, MenuDivider, MenuDropdown, MenuItem, MenuLabel, MenuTarget } from '@mantine/core'
import { IconDotsVertical } from '@tabler/icons-react'
import React from 'react'
import LogoutMenuItem from './LogoutMenuItem'
import { openEditDashboardModal } from '@/stores/edit-dashboard-modal-proxy'

const ActionsMenu = () => {
  const handleEditBoard = () => {
    openEditDashboardModal()
  }

  return (
    <Menu shadow="md" width={200} position='bottom-end' offset={25}>
      <MenuTarget>
        <ActionIcon variant='transparent' color='#979797'>
          <IconDotsVertical size={20} />
        </ActionIcon>
      </MenuTarget>

      <MenuDropdown>
        <MenuLabel>Board</MenuLabel>
        <MenuItem onClick={handleEditBoard}>Edit Board</MenuItem>
        <MenuItem color="red">Delete Board</MenuItem>
        <MenuDivider />

        <MenuLabel>Settings</MenuLabel>

        <LogoutMenuItem />
      </MenuDropdown>
    </Menu>
  )
}

export default ActionsMenu
