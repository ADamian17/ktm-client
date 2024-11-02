import DashboardLayout from '@/layouts/DashboardLayout';
import { WithChildrenType } from '@/types';

const SingleDashboardRootLayout = ({ children }: WithChildrenType) => (
  <DashboardLayout>{children}</DashboardLayout>
);

export default SingleDashboardRootLayout
