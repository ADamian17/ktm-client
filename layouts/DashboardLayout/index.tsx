import { AppShell, AppShellMain } from '@mantine/core';
import { WithChildrenType } from '@/types';
import AllBoardNavigation from '@/components/AllBoardNavigation';
import DashboardLayoutAsideMenu from './DashboardLayoutAsideMenu';
import DashboardLayoutHeader from './DashboardLayoutHeader';
import CreateDashboardModal from '@/components/CreateDashboardModal';

const DashboardLayout = ({ children }: WithChildrenType) => {
  return (
    <AppShell
      header={{ height: { base: 64, md: 80, lg: 97 } }}
      padding={{ base: 16, md: 24 }}
    >
      <DashboardLayoutHeader>
        <AllBoardNavigation />
      </DashboardLayoutHeader>

      <AppShellMain>
        {children}

        <DashboardLayoutAsideMenu>
          <AllBoardNavigation />
        </DashboardLayoutAsideMenu>

        <CreateDashboardModal />
      </AppShellMain>
    </AppShell>
  )
};

export default DashboardLayout
