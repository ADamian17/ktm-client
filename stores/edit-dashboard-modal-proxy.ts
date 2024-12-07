import { proxy } from "valtio";

interface EditDashboardModalProxyState {
  isOpen: boolean;
}

export const editDashboardModalProxy = proxy<EditDashboardModalProxyState>({
  isOpen: false,
});

export const openEditDashboardModal = () => {
  editDashboardModalProxy.isOpen = true;
};

export const closeEditDashboardModal = () => {
  editDashboardModalProxy.isOpen = false;
};
