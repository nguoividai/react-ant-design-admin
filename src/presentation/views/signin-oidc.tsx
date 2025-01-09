import { memo, useEffect } from "react";
import oidcManager from "../../applications/oidc-manager";
import { useNavigate } from "react-router-dom";

function SigninOidc() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOidcCallback = async () => {
      await oidcManager.handleCallback();
      navigate("/");
    };

    handleOidcCallback();
  }, [navigate]);

  return <>Loading...</>;
}

export default memo(SigninOidc);
