import { proxy } from "valtio";

interface createDashboardModalProxyState {
  isOpen: boolean;
}

export const createDashboardModalProxy = proxy<createDashboardModalProxyState>({
  isOpen: false,
});

export const openCreateDashboardModal = () => {
  createDashboardModalProxy.isOpen = true;
};

export const closeCreateDashboardModal = () => {
  createDashboardModalProxy.isOpen = false;
};
