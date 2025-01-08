import React from "react";
import { Drawer } from "antd";
import styled from "styled-components";
import { SiderLogo } from "../SiderLogo";

interface MobileHeaderProps {
  children: React.ReactNode;
  onClose?: () => void;
  open?: boolean;
}

const MobileDrawer = styled(Drawer)`
  .ant-drawer-body {
    background-color: #29343d;
    padding: 0;
  }
`;

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  children,
  open,
  onClose,
}) => {
  return (
    <MobileDrawer
      placement={"left"}
      closable={false}
      onClose={onClose}
      open={open}
    >
      <SiderLogo />
      {children}
    </MobileDrawer>
  );
};
