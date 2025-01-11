import React, { memo, useEffect } from "react";
import oidcManager from "../../applications/oidc-manager";

type RequireAuthProps = {
  children: React.ReactNode;
};

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  useEffect(() => {
    const login = async () => {
      const user = await oidcManager.getUser();
      if (!user) oidcManager.login();
    };

    const timer = setTimeout(() => {
      login();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
};

export default memo(RequireAuth);
