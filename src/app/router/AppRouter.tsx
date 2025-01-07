import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import MainLayout from "../layouts/main/MainLayout/MainLayout";
import Test from "../views/Test";
import Page404 from "../pages/Page404";

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
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
