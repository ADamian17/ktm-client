import { AppShell, AppShellHeader, AppShellMain, Divider, Group } from '@mantine/core';
import { WithChildrenType } from '@/types';
import Logo from '@/layouts/DashboardLayout/DashboardLayoutHeader/Logo';

const DashboardRootLayout = ({ children }: WithChildrenType) => (
  <AppShell
    header={{ height: { base: 64, md: 80, lg: 97 } }}
    p="lg"
  >
    <AppShellHeader>
      <Group align='center' justify='space-between' h="100%" pl={24} pr={24}>
        <Group align='center' h="100%">
          <Logo />
          <Divider orientation="vertical" visibleFrom="sm" ml="lg" />
        </Group>
      </Group>
    </AppShellHeader>

    <AppShellMain>
      {children}
    </AppShellMain>
  </AppShell>
);

export default DashboardRootLayout
