import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login'
import Home from './Pages/Home'
import Settings from './Pages/Settings';
import React, { useState } from "react";
import NoPage from "./Pages/NoPage";
import { AuthProvider } from "./AuthContext";

export default function App() {

  return (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route index element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>  
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);