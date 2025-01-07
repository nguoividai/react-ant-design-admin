import React, { useEffect, useState } from "react";
import MainSider from "../sider/MainSider/MainSider";
import MainContent from "../MainContent/MainContent";
import { MainHeader } from "../MainHeader/MainHeader";
import * as S from "./MainLayout.styles";
import { Outlet } from "react-router-dom";
import { useResponsive } from "../../../../shared/hooks/useResponsive";
import { Avatar, Dropdown, MenuProps } from "antd";
import { LogoutOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { MobileHeader } from "../sider/SiderMenu/MobileMenu";
import { useDialog } from "../../../../shared/hooks/useDialog";
import SiderMenu from "../sider/SiderMenu/SiderMenu";
import useLayout from "../../../../usecases/layout";

const MainLayout: React.FC = () => {
  const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(true);
  const [siderCollapsed, setSiderCollapsed] = useState(true);
  const { isDesktop, mobileOnly, isBigScreen } = useResponsive();
  const { open, onShow, onClose } = useDialog();
  const { setCollapsed, collapsed } = useLayout();

  useEffect(() => {
    setIsTwoColumnsLayout(isDesktop);
  }, [isDesktop]);

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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
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
              <MenuOutlined onClick={() => setCollapsed(false)} />
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

export default MainLayout;
