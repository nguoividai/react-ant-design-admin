import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import * as S from "./SiderMenu.styles";
import { sidebarNavigation, SidebarNavigationItem } from "../sidebarNavigation";
import { useResponsive } from "../../../../shared/hooks/useResponsive";

interface SiderContentProps {
  setCollapsed?: (isCollapsed: boolean) => void;
}

const sidebarNavFlat = sidebarNavigation.reduce(
  (result: SidebarNavigationItem[], current) =>
    result.concat(
      current.children && current.children.length > 0
        ? current.children
        : current
    ),
  []
);

const SiderMenu: React.FC<SiderContentProps> = ({ setCollapsed }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { tabletOnly } = useResponsive();

  const currentMenuItem = sidebarNavFlat.find(
    ({ url }) => url === location.pathname
  );
  const defaultSelectedKeys = currentMenuItem ? [currentMenuItem.key] : [];

  const openedSubmenu = sidebarNavigation.find(({ children }) =>
    children?.some(({ url }) => url === location.pathname)
  );
  const defaultOpenKeys = openedSubmenu ? [openedSubmenu.key] : [];

  return (
    <S.Menu
      mode="inline"
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={tabletOnly ? undefined : defaultOpenKeys}
      onClick={() => setCollapsed?.(true)}
      theme="dark"
      style={{ padding: "4px" }}
      items={sidebarNavigation.map((nav) => {
        const isSubMenu = nav.children?.length;

        return {
          key: nav.key,
          title: t(nav.title),
          label: isSubMenu ? (
            t(nav.title)
          ) : (
            <Link to={nav.url ?? ""}>{t(nav.title)}</Link>
          ),
          icon: nav.icon,
          children:
            isSubMenu &&
            nav.children?.map((childNav) => ({
              key: childNav.key,
              label: <Link to={childNav.url ?? ""}>{t(childNav.title)}</Link>,
              title: t(childNav.title),
              icon: isSubMenu ? <span className="sub-circle"></span> : nav.icon,
            })),
        };
      })}
    />
  );
};

export default SiderMenu;
