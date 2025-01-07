import React from "react";
import * as S from "./MainSider.styles";
import { SiderLogo } from "../SiderLogo";
import SiderMenu from "../SiderMenu/SiderMenu";
import { useResponsive } from "../../../../../shared/hooks/useResponsive";
import { Overlay } from "../../../../../shared/components/Overlay/Overlay";
import useLayout from "../../../../../shared/store/layout";

interface MainSiderProps {
  isCollapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

const MainSider: React.FC<MainSiderProps> = ({
  isCollapsed,
  setCollapsed,
  ...props
}) => {
  const { isDesktop, tabletOnly } = useResponsive();
  const { collapsed } = useLayout();

  const toggleSider = () => setCollapsed(!isCollapsed);

  return (
    <>
      <S.Sider
        trigger={null}
        collapsed={!isDesktop && isCollapsed}
        collapsedWidth={tabletOnly || isDesktop ? 80 : 0}
        collapsible={collapsed}
        width={collapsed ? 0 : 260}
        {...props}
      >
        <SiderLogo isSiderCollapsed={isCollapsed} toggleSider={toggleSider} />
        <S.SiderContent>
          <SiderMenu setCollapsed={setCollapsed} />
        </S.SiderContent>
      </S.Sider>
      <Overlay onClick={toggleSider} show={!isCollapsed} />
    </>
  );
};

export default MainSider;
