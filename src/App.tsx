import type { ReactNode } from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";



export default function App(): ReactNode {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  )
 
}
