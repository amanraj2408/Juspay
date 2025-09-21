// Dashboard.jsx (main layout part only)
import React, { useState } from "react";
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
  background: "#f7f7f8",
  position: "relative",
  margin: "0 auto",
  border: "1px solid #eaeaea",
  fontFamily: "'Roboto', Arial, sans-serif",
};

const sidebarWidth = 212;
const headerHeight = 68;
const rightDrawerWidth = 280;

const mainContentStyle = {
  background: "white",
  marginLeft: sidebarWidth,
  marginTop: headerHeight,
  height: "970px",
  width: "948px",
  padding: 32,
  overflowY: "auto",
  boxSizing: "border-box",
};

const rowStyle = {
  display: "flex",
  gap: 28,
  marginBottom: 28,
};

export default function Dashboard() {
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);
  const [theme, setTheme] = useState("light");
  const [notifVisible, setNotifVisible] = useState(false);

  return (
    <div style={dashboardContainerStyle}>
      <Sidebar open={collapsedSidebar} onClose={() => setCollapsedSidebar(false)} />
      <div style={{ flex: 1, position: "relative" }}>
        <Header
          collapsedSidebar={collapsedSidebar}
          onToggleSidebar={() => setCollapsedSidebar(!collapsedSidebar)}
          theme={theme}
          setTheme={setTheme}
          onRefresh={() => window.location.reload()}
          onShowNotifications={() => setNotifVisible(true)}
        />

        <div style={mainContentStyle}>
          <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 20 }}>eCommerce</h3>

          {/* Top row: Stat cards beside chart */}
          <div style={rowStyle}>
            <div >
              <Card />
            </div>
            <div >
              <Graph />
            </div>
          </div>

          {/* Second row: Revenue (line chart) and Location chart side by side */}
          <div style={rowStyle}>
            <div >
              <RevenueGraph />
            </div>
            <div>
              <LocationGraph />
            </div>
          </div>

          {/* Third row: Selling and Total Sell chart side by side */}
          <div style={rowStyle}>
            <div >
              <SellingGraph />
            </div>
            <div >
              <TotalSellGraph />
            </div>
          </div>
        </div>
      </div>
      {/* Notification Drawer Overlay */}
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
