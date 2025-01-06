import React from "react";
import * as S from "./MainSider.styles";
import { SiderLogo } from "../SiderLogo";
import SiderMenu from "../SiderMenu/SiderMenu";
import { useResponsive } from "../../../../../shared/hooks/useResponsive";
import { Overlay } from "../../../../../shared/components/Overlay/Overlay";

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

  const isCollapsible = true;

  const toggleSider = () => setCollapsed(!isCollapsed);

  return (
    <>
      <S.Sider
        trigger={null}
        collapsed={!isDesktop && isCollapsed}
        collapsedWidth={tabletOnly ? 80 : 0}
        collapsible={isCollapsible}
        width={260}
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