import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import NotificationDrawer from "./NotificationDrawer";
import Card from "../components/Card";
import Graph from "../components/Graph";
import RevenueGraph from "../components/Revenue";
import SellingGraph from "../components/Selling";
import LocationGraph from "../components/Location";
import TotalSellGraph from "../components/TotalSell";

const dashboardContainerStyle = {
  display: "flex",
  width: "1440px",
  height: "1206px",
  position: "relative",
  margin: "0 auto",
  border: "1px solid #eaeaea",
  fontFamily: "'Roboto', Arial, sans-serif",
};

const sidebarWidth = 212;
const headerHeight = 68;
const rightDrawerWidth = 280;

export default function Dashboard() {
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);
  const [notifVisible, setNotifVisible] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  // Sync document.documentElement class with isDark state
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Toggle theme handler
  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      return next;
    });
  };

  // inline style for main content container (optional background)
  const mainContentStyle = {
    marginLeft: sidebarWidth,
    marginTop: headerHeight,
    height: "970px",
    width: "948px",
    padding: 32,
    overflowY: "auto",
    boxSizing: "border-box",
    backgroundColor: isDark ? "#121212" : "#fff",
    color: isDark ? "#eee" : "#000",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  const rowStyle = {
    display: "flex",
    gap: 28,
    marginBottom: 28,
  };

  return (
    <div style={dashboardContainerStyle}>
      <Sidebar open={collapsedSidebar} onClose={() => setCollapsedSidebar(false)} />
      <div style={{ flex: 1, position: "relative" }}>
        <Header
          collapsedSidebar={collapsedSidebar}
          onToggleSidebar={() => setCollapsedSidebar(!collapsedSidebar)}
          isDark={isDark}
          onToggleTheme={toggleTheme}
          onRefresh={() => window.location.reload()}
          onShowNotifications={() => setNotifVisible(true)}
        />

        <div style={mainContentStyle}>
          <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 20 }}>eCommerce</h3>
          <div style={rowStyle}>
            <Card />
            <Graph />
          </div>
          <div style={rowStyle}>
            <RevenueGraph />
            <LocationGraph />
          </div>
          <div style={rowStyle}>
            <SellingGraph />
            <TotalSellGraph />
          </div>
        </div>
      </div>

      {notifVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: rightDrawerWidth,
            height: "100%",
            background: "#fff",
            borderLeft: "1px solid #eaeaea",
            zIndex: 1000,
          }}
        >
          <NotificationDrawer open={notifVisible} onClose={() => setNotifVisible(false)} />
        </div>
      )}
    </div>
  );
}
