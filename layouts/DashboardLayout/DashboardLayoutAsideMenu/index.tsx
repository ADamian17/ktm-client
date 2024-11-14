"use client"
import React from 'react'
import ColorThemeToggle from '@/components/ColorThemeToggle'
import { asideMenuProxy, closeAsideMenu, openAsideMenu } from '@/stores/asideMenuProxy'
import { ActionIcon, Drawer, Group, rem, Stack, Text } from '@mantine/core'
import { IconEyeOff, IconMenu4 } from '@tabler/icons-react'
import { useSnapshot } from 'valtio'

type DashboardLayoutAsideMenuProps = {
  children: React.ReactNode
}

const DashboardLayoutAsideMenu: React.FC<DashboardLayoutAsideMenuProps> = ({ children }) => {
  const { isOpen } = useSnapshot(asideMenuProxy)

  return (
    <>
      <ActionIcon
        visibleFrom="sm"
        style={{ position: 'fixed', bottom: 32, left: 10 }}
        color="violet"
        onClick={openAsideMenu}
        p="md"
        radius="lg"
        variant='filled'
        w={rem(56)}
        h={rem(48)}
      >
        <IconMenu4 size={18} />
      </ActionIcon>

      <Drawer
        visibleFrom="sm"
        offset={8}
        onClose={closeAsideMenu}
        opened={isOpen}
        size="sm"
        withCloseButton={false}
        radius="sm"
      >
        <Stack style={{ height: "90vh" }}>
          {children}

          <ColorThemeToggle />

          <ActionIcon
            color="gray"
            p="md"
            radius="lg"
            variant='transparent'
            w="fit-content"
          >
            <Group onClick={() => closeAsideMenu()}>
              <IconEyeOff size={18} />

              <Text>Hide Sidebar</Text>
            </Group>
          </ActionIcon>
        </Stack>
      </Drawer>
    </>
  )
}

export default DashboardLayoutAsideMenu