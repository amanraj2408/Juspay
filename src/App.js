import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoverPage from "../src/components/CoverPage";
import Dashboard from "../src/Dashboard/Dashboard";
import OrderDashboard from "../src/Dashboard/OrderDashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<OrderDashboard />} />
        
      </Routes>
    </Router>
  );
}
