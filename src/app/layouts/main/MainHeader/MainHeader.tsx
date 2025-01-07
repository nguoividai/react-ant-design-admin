import React from "react";
import * as S from "./MainHeader.styles";

interface MainHeaderProps {
  isTwoColumnsLayout: boolean;
  collapsed: boolean;
  children: React.ReactNode;
}

export const MainHeader: React.FC<MainHeaderProps> = ({
  isTwoColumnsLayout,
  collapsed,
  children,
}) => {
  return (
    <S.Header
      $isTwoColumnsLayoutHeader={isTwoColumnsLayout}
      $collapsed={collapsed}
    >
      {children}
    </S.Header>
  );
};
