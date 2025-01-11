import { memo, useEffect } from "react";
import oidcManager from "../../applications/oidc-manager";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const SpinLayout = styled(Spin)`
  height: 100vh;
`;

function SigninOidc() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const handleOidcCallback = async () => {
      try {
        await oidcManager.handleCallback();
        navigate("/");
      } catch {
        const user = await oidcManager.getUser();
        if (user) {
          navigate("/");
        }
      }
    };

    handleOidcCallback();
  }, [navigate]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <SpinLayout
        indicator={<LoadingOutlined spin />}
        tip={t("common.Loading")}
        size="large"
      >
        <div style={{ opacity: 0 }}>{t("common.Loading")}</div>
      </SpinLayout>
    </div>
  );
}

export default memo(SigninOidc);
