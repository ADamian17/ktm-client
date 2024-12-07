import { proxy } from "valtio";

interface CreateDashboardModalProxyState {
  isOpen: boolean;
}

export const createDashboardModalProxy = proxy<CreateDashboardModalProxyState>({
  isOpen: false,
});

export const openCreateDashboardModal = () => {
  createDashboardModalProxy.isOpen = true;
};

export const closeCreateDashboardModal = () => {
  createDashboardModalProxy.isOpen = false;
};
