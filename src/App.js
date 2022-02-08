import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import CreateTask from "./components/CreateTask";
import UpdateTask from "./components/UpdateTask";
import Page404 from "./components/Page404";
import './css/login.css';
import './css/home.css';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:taskId" element={<UpdateTask />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}
