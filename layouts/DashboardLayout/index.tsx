"use client"
import { WithChildrenType } from '@/types';
import { ActionIcon, AppShell, AppShellHeader, AppShellMain, Button, Group, Menu, MenuDivider, MenuDropdown, MenuItem, MenuLabel, MenuTarget, Modal, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconDotsVertical, IconLogout, IconPlus } from '@tabler/icons-react';

const DashboardLayout = ({ children }: WithChildrenType) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: { base: 64, md: 80, lg: 97 } }}
      navbar={{ width: { base: 200, md: 300 }, breakpoint: 'sm' }}
    >
      <AppShellHeader>
        <Group align='center' justify='space-between' h="100%" pl={24} pr={24}>
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

          <Group>
            <Button onClick={open} color='violet' radius="lg" leftSection={<IconPlus size={14} />}>
              Add new task
            </Button>

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

      <AppShellMain>
        {children}
      </AppShellMain>
    </AppShell>
  )
};


export default DashboardLayout
