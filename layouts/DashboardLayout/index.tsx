"use client"
import { WithChildrenType } from '@/types';
import { ActionIcon, AppShell, AppShellMain, Drawer, Group, rem, ScrollArea, Stack, Text } from '@mantine/core';
import DashboardLayoutHeader from './DashboardLayoutHeader';
import { IconEyeOff, IconMenu4 } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import ColorThemeToggle from '@/components/ColorThemeToggle';

const DashboardLayout = ({ children }: WithChildrenType) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: { base: 64, md: 80, lg: 97 } }}
      navbar={{ width: { base: 200, md: 300 }, breakpoint: 'sm' }}
    >
      <DashboardLayoutHeader />

      <AppShellMain>
        {children}
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
            <Text>All Boards (3)</Text>

            <ScrollArea h="100%">
              ... content
            </ScrollArea>

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
      </AppShellMain>
    </AppShell>
  )
};

export default DashboardLayout
