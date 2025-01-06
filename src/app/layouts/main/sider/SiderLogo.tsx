import React from "react";
import * as S from "./MainSider/MainSider.styles";
import { RightOutlined } from "@ant-design/icons";
import logo from "../../../../assets/logo.svg";
// import logoDark from "assets/logo-dark.png";
// import { useAppSelector } from "@app/hooks/reduxHooks";
import { useResponsive } from "../../../../shared/hooks/useResponsive";

interface SiderLogoProps {
  isSiderCollapsed: boolean;
  toggleSider: () => void;
}
export const SiderLogo: React.FC<SiderLogoProps> = ({
  isSiderCollapsed,
  toggleSider,
}) => {
  const { tabletOnly } = useResponsive();

  // const theme = useAppSelector((state) => state.theme.theme);

  // const img = theme === "dark" ? logoDark : logo;
  const img = logo;

  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink to="/">
        <img src={img} alt="Lightence" width={165} height={32} />
      </S.SiderLogoLink>
      {tabletOnly && (
        <S.CollapseButton
          shape="circle"
          size="small"
          $isCollapsed={isSiderCollapsed}
          icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
          onClick={toggleSider}
        />
      )}
    </S.SiderLogoDiv>
  );
};
