import React, { memo, useEffect, useState } from "react";
import MainSider from "../sider/MainSider/MainSider";
import MainContent from "../MainContent/MainContent";
import { MainHeader } from "../MainHeader/MainHeader";
import * as S from "./MainLayout.styles";
import { Outlet } from "react-router-dom";
import { useResponsive } from "../../../shared/hooks/useResponsive";
import { Avatar, Dropdown, MenuProps } from "antd";
import { LogoutOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { MobileHeader } from "../sider/SiderMenu/MobileMenu";
import { useDialog } from "../../../shared/hooks/useDialog";
import SiderMenu from "../sider/SiderMenu/SiderMenu";
import useLayout from "../../../../domain/useCases/layout";
import BaseToggleMenu from "../../../shared/components/BaseToggleMenu/BaseToggleMenu";
import oidcManager from "../../../../applications/oidc-manager";

const MainLayout: React.FC = () => {
  const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(true);
  const [siderCollapsed, setSiderCollapsed] = useState(true);
  const { isDesktop, mobileOnly, isBigScreen } = useResponsive();
  const { open, onShow, onClose } = useDialog();
  const { setCollapsed, collapsed } = useLayout();

  useEffect(() => {
    setIsTwoColumnsLayout(isDesktop);
  }, [isDesktop]);

  const logout = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    oidcManager.logout();
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          My profile
        </a>
      ),
    },
    {
      key: "2",
      icon: <LogoutOutlined />,
      label: (
        <a href="#/" onClick={logout}>
          Logout
        </a>
      ),
    },
  ];

  return (
    <S.LayoutMaster>
      <MainSider
        isCollapsed={siderCollapsed}
        setCollapsed={setSiderCollapsed}
      />
      <S.LayoutMain>
        <MainHeader
          isTwoColumnsLayout={isTwoColumnsLayout}
          collapsed={collapsed}
        >
          <div className="right-section">
            {(isDesktop || isBigScreen) && collapsed && (
              <BaseToggleMenu
                shape="circle"
                icon={<MenuOutlined />}
                onClick={() => setCollapsed(false)}
              />
            )}
            {mobileOnly && (
              <>
                <MenuOutlined onClick={onShow} />
                <MobileHeader open={open} onClose={onClose}>
                  <SiderMenu />
                </MobileHeader>
              </>
            )}
          </div>

          <Dropdown menu={{ items }} placement="bottomLeft">
            <div className="avatar-section">
              <span className="user-name">duong.hoang</span>
              <Avatar
                style={{
                  backgroundColor: "#f56a00",
                  verticalAlign: "middle",
                }}
                gap={4}
              >
                <UserOutlined />
              </Avatar>
            </div>
          </Dropdown>
        </MainHeader>
        <MainContent
          id="main-content"
          $isTwoColumnsLayout={isTwoColumnsLayout}
          $collapsed={collapsed}
        >
          <div>
            <Outlet />
          </div>
        </MainContent>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default memo(MainLayout);
