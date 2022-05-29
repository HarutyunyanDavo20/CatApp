import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ModalBase from "./modalBase/ModalBase";
import { lazy } from "react";
import { Suspense } from "react";
import Spiner from "components/Spiner";
const LoginPage = lazy(() => import("pages/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const Main = lazy(() => import("./components/Main"));
const Layout = lazy(() => import("./components/Layout"));

function App() {
  return (
    <div className="App">
      <ModalBase />
      <Suspense fallback={<Spiner />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="category/:id" element={<Main />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
