import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "./index.css";
import "./styles/shapes.css"
import "./styles/shadows.css"
import "./styles/colors.css"
import "./styles/typography.css"
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
<BrowserRouter>
    <App />
  </BrowserRouter>,
);
