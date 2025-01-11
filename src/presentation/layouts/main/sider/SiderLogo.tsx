import React from "react";
import * as S from "./MainSider/MainSider.styles";
import { MenuOutlined, RightOutlined } from "@ant-design/icons";
import logo from "@/presentation/assets/logo.svg";
import { useResponsive } from "../../../shared/hooks/useResponsive";
import useLayout from "../../../../domain/useCases/layout";
import BaseToggleMenu from "../../../shared/components/BaseToggleMenu/BaseToggleMenu";

interface SiderLogoProps {
  isSiderCollapsed?: boolean;
  toggleSider?: () => void;
}
export const SiderLogo: React.FC<SiderLogoProps> = ({
  isSiderCollapsed,
  toggleSider,
}) => {
  const { tabletOnly, desktopOnly, isBigScreen } = useResponsive();
  const { collapsed, setCollapsed } = useLayout();

  const img = logo;

  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink to="/">
        <img src={img} alt="Lightence" width={165} height={32} />
        {(desktopOnly || isBigScreen) && (
          <BaseToggleMenu
            shape="circle"
            type="link"
            icon={<MenuOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        )}
      </S.SiderLogoLink>
      {tabletOnly && (
        <S.CollapseButton
          shape="circle"
          size="small"
          $isCollapsed={!!isSiderCollapsed}
          icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
          onClick={toggleSider}
        />
      )}
    </S.SiderLogoDiv>
  );
};
