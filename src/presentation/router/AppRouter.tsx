import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import MainLayout from "../layouts/main/MainLayout/MainLayout";
import Page404 from "../pages/Page404";

const Login = React.lazy(() => import("../views/auth/login"));
const Test = React.lazy(() => import("../views/test"));
const SignInOidc = React.lazy(() => import("../views/signin-oidc"));

export const AppRouter: React.FC = () => {
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={protectedLayout}>
          <Route index element={<Test />} />
        </Route>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/signin-oidc" element={<SignInOidc />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
