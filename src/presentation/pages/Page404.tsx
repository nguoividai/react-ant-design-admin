import React, { memo } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Page404: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToHome = () => navigate("/");

  return (
    <div style={{ width: "100vw" }}>
      <Result
        status="404"
        title="404"
        subTitle={t("common.404SubTitle")}
        extra={
          <Button type="primary" onClick={goToHome}>
            {t("common.BackHome")}
          </Button>
        }
      />
    </div>
  );
};
export default memo(Page404);
