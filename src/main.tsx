import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes as Rs, Route } from "react-router-dom";

import { MoreProjects, About } from "./pages";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Rs>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<MoreProjects />} />
        <Route path="/about" element={<About />} />
      </Rs>
    </Router>
  </React.StrictMode>
);
