import React, { useEffect, useState } from "react";
import MainSider from "../sider/MainSider/MainSider";
import MainContent from "../MainContent/MainContent";
import { MainHeader } from "../MainHeader/MainHeader";
import * as S from "./MainLayout.styles";
import { Outlet } from "react-router-dom";
import { useResponsive } from "../../../../shared/hooks/useResponsive";
import { Avatar } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { MobileHeader } from "../sider/SiderMenu/MobileMenu";
import { useDialog } from "../../../../shared/hooks/useDialog";
import SiderMenu from "../sider/SiderMenu/SiderMenu";

const MainLayout: React.FC = () => {
  const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(true);
  const [siderCollapsed, setSiderCollapsed] = useState(true);
  const { isDesktop, mobileOnly } = useResponsive();
  const { open, onShow, onClose } = useDialog();

  useEffect(() => {
    setIsTwoColumnsLayout(isDesktop);
  }, [isDesktop]);

  return (
    <S.LayoutMaster>
      <MainSider
        isCollapsed={siderCollapsed}
        setCollapsed={setSiderCollapsed}
      />
      <S.LayoutMain>
        <MainHeader isTwoColumnsLayout={isTwoColumnsLayout}>
          <div className="right-section">
            {mobileOnly && (
              <>
                <MenuOutlined onClick={onShow} />
                <MobileHeader open={open} onClose={onClose}>
                  <SiderMenu />
                </MobileHeader>
              </>
            )}
          </div>
          <div className="avatar-section">
            <span className="user-name">duong.hoang</span>
            <Avatar
              style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
              gap={4}
            >
              <UserOutlined />
            </Avatar>
          </div>
        </MainHeader>
        <MainContent id="main-content" $isTwoColumnsLayout={isTwoColumnsLayout}>
          <div>
            <Outlet />
          </div>
        </MainContent>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default MainLayout;
