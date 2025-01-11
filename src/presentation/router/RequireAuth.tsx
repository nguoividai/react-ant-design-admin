import React, { memo, useEffect } from "react";
import oidcManager from "../../applications/oidc-manager";
import useAuth from "../../domain/useCases/auth";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { User } from "oidc-client-ts";

type RequireAuthProps = {
  children: React.ReactNode;
};

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const { setLoading, loading, setUser } = useAuth();

  useEffect(() => {
    const login = async () => {
      try {
        const user = await oidcManager.getUser();
        if (!user) oidcManager.login();
        setUser(user as User);
      } catch (e) {
        console.error("Login failed", e);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);

    const timer = setTimeout(() => {
      login();
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLoading, setUser]);

  return (
    <Spin spinning={loading} indicator={<LoadingOutlined spin />}>
      {children}
    </Spin>
  );
};

export default memo(RequireAuth);
