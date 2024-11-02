"use client"
import ColorThemeToggle from '@/components/ColorThemeToggle'
import { ActionIcon, Drawer, Group, rem, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconEyeOff, IconMenu4 } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

type DashboardLayoutAsideMenuProps = {
  children: React.ReactNode
}

const DashboardLayoutAsideMenu: React.FC<DashboardLayoutAsideMenuProps> = ({ children }) => {
  const pathname = usePathname();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (opened) {
      close()
      return
    }
  }, [pathname, close]) // eslint-disable-line

  return (
    <>
      <ActionIcon
        visibleFrom="sm"
        style={{ position: 'fixed', bottom: 32, left: 10 }}
        color="violet"
        onClick={open}
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
        onClose={close}
        opened={opened}
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
            <Group onClick={() => close()}>
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