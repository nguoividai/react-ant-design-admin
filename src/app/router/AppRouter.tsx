import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import MainLayout from "../layouts/main/MainLayout/MainLayout";
import Test from "../views/Test";

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
      </Routes>
    </BrowserRouter>
  );
};
