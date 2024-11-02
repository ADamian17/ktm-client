import { AppShell, AppShellMain } from '@mantine/core';
import { WithChildrenType } from '@/types';
import AllBoardNavigation from '@/components/AllBoardNavigation';
import DashboardLayoutAsideMenu from './DashboardLayoutAsideMenu';
import DashboardLayoutHeader from './DashboardLayoutHeader';

const DashboardLayout = ({ children }: WithChildrenType) => {
  return (
    <AppShell
      header={{ height: { base: 64, md: 80, lg: 97 } }}
      navbar={{ width: { base: 200, md: 300 }, breakpoint: 'sm' }}
    >
      <DashboardLayoutHeader>
        <AllBoardNavigation />
      </DashboardLayoutHeader>

      <AppShellMain>
        {children}

        <DashboardLayoutAsideMenu>
          <AllBoardNavigation />
        </DashboardLayoutAsideMenu>
      </AppShellMain>
    </AppShell>
  )
};

export default DashboardLayout