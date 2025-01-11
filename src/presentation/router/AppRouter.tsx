import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import MainLayout from "../layouts/main/MainLayout/MainLayout";
import Page404 from "../pages/Page404";

const Test = React.lazy(() => import("../views/test"));
const Logout = React.lazy(() => import("../pages/Logout"));
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
        <Route path="/signin-oidc" element={<SignInOidc />} />
        <Route path="/signout-callback-oidc" element={<Logout />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
