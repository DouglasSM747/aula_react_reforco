import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Login from "./pages/Login/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";
import Products from "./pages/Products/Products";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route element={<Layout />}>
          <Route path="/products" element={<Products />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
