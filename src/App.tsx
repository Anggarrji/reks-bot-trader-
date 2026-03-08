import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TradingPanel from "./pages/TradingPanel";
import BotSettings from "./pages/BotSettings";
import AccountConnection from "./pages/AccountConnection";
import History from "./pages/History";
import RiskManager from "./pages/RiskManager";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <BrowserRouter>
      <Layout onLogout={() => setIsAuthenticated(false)}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trading" element={<TradingPanel />} />
          <Route path="/bot-settings" element={<BotSettings />} />
          <Route path="/connection" element={<AccountConnection />} />
          <Route path="/history" element={<History />} />
          <Route path="/risk-manager" element={<RiskManager />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
