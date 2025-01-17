import React from "react";
import {
  UserOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: "common.Organization",
    key: "Organization",
    // TODO use path variable
    url: "/organization",
    icon: <UsergroupAddOutlined />,
  },
  {
    title: "common.User",
    key: "user-group",
    icon: <UserOutlined />,

    children: [
      {
        title: "common.User",
        key: "user",
        url: "/",
      },
      {
        title: "common.UserSystem",
        key: "user-system",
        url: "/user-system",
      },
    ],
  },
  {
    title: "common.SystemSettings",
    key: "SystemSettings",
    url: "/system-settings",
    icon: <SettingOutlined />,
  },
];
