import { ActionIcon, AppShellHeader, Divider, Group, Menu, MenuDivider, MenuDropdown, MenuItem, MenuLabel, MenuTarget, Modal, rem, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { IconDotsVertical, IconLogout, IconPlus } from '@tabler/icons-react'
import React from 'react'
import CurrentBoard from './CurrentBoard';

const DashboardLayoutHeader = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <AppShellHeader>
      <Group align='center' justify='space-between' h="100%" pl={24} pr={24}>
        <Group align='center' h="100%">
          <picture style={{ height: 25 }}>
            <source
              media="(min-width: 768px) and (prefers-color-scheme: dark)"
              srcSet="icons/kanban-light.svg"
            />
            <source
              media="(min-width: 768px) and (prefers-color-scheme: light)"
              srcSet="icons/kanban-dark.svg"
            />

            <img
              src="icons/kanban-mobile.svg"
              alt="Themed Image"
            />
          </picture>

          <Divider orientation="vertical" visibleFrom="sm" />

          <CurrentBoard />
        </Group>

        <Group>
          <ActionIcon variant='filled' color="violet" onClick={open} radius="lg" w="fit-content" p="md">
            <IconPlus size={14} />

            <Text visibleFrom="md">
              Add new task
            </Text>
          </ActionIcon>

          <Modal opened={opened} onClose={close} title="Authentication" centered>
            Modal content
          </Modal>

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
        </Group>
      </Group>
    </AppShellHeader>
  )
}

export default DashboardLayoutHeader