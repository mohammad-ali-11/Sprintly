import type { ReactNode } from "react";

import { Route, Routes } from "react-router";

import RootLayout from "./layout/RootLayout/RootLayout";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App(): ReactNode {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
