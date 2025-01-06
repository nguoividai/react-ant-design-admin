import styled from "styled-components";
import { FONT_SIZE } from "../../../../../shared/styles/constants";
import { BaseMenu } from "../../../../../shared/components/BaseMenu/BaseMenu";

export const Menu = styled(BaseMenu)`
  background: transparent;
  border-right: 0;

  a {
    width: 100%;
    display: block;
  }

  .ant-menu-item,
  .ant-menu-submenu {
    font-size: ${FONT_SIZE.xs};
    border-radius: 4px;
  }

  .ant-menu-sub .ant-menu-item {
    padding-left: 24px !important;
  }

  .sub-circle {
    display: flex;
    justify-content: center;
  }

  .sub-circle::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
  }

  .ant-menu-item-icon {
    width: 16px;
    height: 16px;
  }

  .ant-menu-submenu-expand-icon,
  .ant-menu-submenu-arrow,
  span[role="img"],
  a,
  .ant-menu-item,
  .ant-menu-submenu {
    color: #fff;
    fill: #fff;
  }

  .ant-menu-submenu-expand-icon,
  .ant-menu-submenu-arrow,
  span[role="img"],
  a,
  .ant-menu-item-icon,
  .ant-menu-title-content {
    color: #fff !important;
    fill: #fff !important;
  }

  .ant-menu-item:hover,
  .ant-menu-submenu-title:hover {
    background-color: #e25f3e33 !important;
  }

  .ant-menu-submenu:hover {
    background-color: #e25f3e33 !important;
  }

  .ant-menu-submenu-selected {
    background-color: #e25f3e33 !important;
    .ant-menu-submenu-title {
      color: #fff;

      .ant-menu-submenu-expand-icon,
      .ant-menu-submenu-arrow,
      span[role="img"] {
        color: #fff;
        fill: #fff;
      }
    }
  }

  .ant-menu-item-selected {
    background-color: #e25f3e33 !important;

    .ant-menu-submenu-expand-icon,
    .ant-menu-submenu-arrow,
    span[role="img"],
    .ant-menu-item-icon,
    a {
      color: #fff;
      fill: #fff;
    }
  }

  .ant-menu-item-active,
  .ant-menu-submenu-active .ant-menu-submenu-title {
    background-color: transparent !important;
  }
`;
