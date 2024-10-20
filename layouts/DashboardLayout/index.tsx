"use client"
import { WithChildrenType } from '@/types';
import { ActionIcon, AppShell, AppShellMain, Drawer } from '@mantine/core';
import DashboardLayoutHeader from './DashboardLayoutHeader';
import { IconMenu4 } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

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
          w={56}
          h={48}
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
          title="All Boards (3)"
        >
          Drawer content
        </Drawer>
      </AppShellMain>
    </AppShell>
  )
};

export default DashboardLayout
