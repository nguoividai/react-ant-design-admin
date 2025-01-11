import React, { memo } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Logout: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToHome = () => navigate("/");

  return (
    <div style={{ width: "100vw" }}>
      <Result
        title={t("common.Logout")}
        subTitle={t("common.SubTitleLogout")}
        extra={
          <Button type="primary" onClick={goToHome}>
            {t("common.ReLogin")}
          </Button>
        }
      />
    </div>
  );
};
export default memo(Logout);
