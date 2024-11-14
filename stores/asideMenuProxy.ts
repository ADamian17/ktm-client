import { proxy } from "valtio";

interface AsideMenuState {
  isOpen: boolean;
}

export const asideMenuProxy = proxy<AsideMenuState>({
  isOpen: false,
});

export const openAsideMenu = () => {
  asideMenuProxy.isOpen = true;
};

export const closeAsideMenu = () => {
  asideMenuProxy.isOpen = false;
};
