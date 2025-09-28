import type { ReactNode } from "react";

import { Route, Routes } from "react-router";

import RootLayout from "./layout/RootLayout/RootLayout";
import BoeardPage from "./pages/BoeardPage/BoeardPage";
import HomePage from "./pages/HomePage/HomePage";

export default function App(): ReactNode {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/board/:id" element={<BoeardPage />} />
      </Route>
    </Routes>
  );
}
