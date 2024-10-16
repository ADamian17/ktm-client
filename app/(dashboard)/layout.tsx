import DashboardLayout from '@/layouts/DashboardLayout';
import { WithChildrenType } from '@/types';

const DashboardRootLayout = ({ children }: WithChildrenType) => (
  <DashboardLayout>{children}</DashboardLayout>
);

export default DashboardRootLayout
