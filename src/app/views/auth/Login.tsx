import React from "react";

import { Button, Checkbox, Form, Grid, Input, theme, Typography } from "antd";

import { LockOutlined, MailOutlined } from "@ant-design/icons";
import Logo from "@assets/logo.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Title } = Typography;

function Login() {
  const { token } = useToken();
  const screens = useBreakpoint();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    navigate("/");
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px",
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    forgotPassword: {
      float: "right",
    },
    header: {
      marginBottom: token.marginXL,
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      width: "100vw",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
    logo: {
      width: 200,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <img alt="ReeSoft-logo" src={Logo} style={styles.logo} />

          <Title style={styles.title}>{t("auth.SignIn")}</Title>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: t("validation.RequiredInputField", {
                  field: t("auth.Email"),
                }),
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder={t("auth.Email")} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: t("validation.RequiredInputField", {
                  field: t("auth.Password"),
                }),
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder={t("auth.Password")}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>{t("auth.RememberMe")}</Checkbox>
            </Form.Item>
            <a style={styles.forgotPassword as React.CSSProperties} href="#/">
              {t("auth.ForgotPassword?")}
            </a>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block type="primary" htmlType="submit">
              {t("auth.LogIn")}
            </Button>
            {/* <div style={styles.footer}>
              <Text style={styles.text}>Don't have an account?</Text>{" "}
              <Link href="">Sign up now</Link>
            </div> */}
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}

export default React.memo(Login);
