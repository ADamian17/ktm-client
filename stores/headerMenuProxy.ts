import { proxy } from "valtio";

interface HeaderMenuState {
  isOpen: boolean;
}

export const headerMenuProxy = proxy<HeaderMenuState>({
  isOpen: false,
});

export const openHeaderMenu = () => {
  headerMenuProxy.isOpen = true;
};

export const closeHeaderMenu = () => {
  headerMenuProxy.isOpen = false;
};
