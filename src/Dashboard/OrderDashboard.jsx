import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import NotificationDrawer from "./NotificationDrawer";

const dashboardContainerStyle = {
  display: "flex",
  width: "1440px",
  minHeight: "800px",
  background: "#f7f7f8",
  position: "relative",
  margin: "0 auto",
  border: "1px solid #eaeaea",
  fontFamily: "'Roboto', Arial, sans-serif",
};

const sidebarWidth = 212;
const headerHeight = 68;
const rightDrawerWidth = 280;

const greyHeaderBaseStyle = {
  position: "absolute",
  top: headerHeight,
  left: sidebarWidth,
  width: "1172px",
  height: "50px",
  borderRadius: "8px 8px 0 0",
  padding: "12px 24px",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  zIndex: 5,
  boxSizing: "border-box",
};

export default function OrderDashboard() {
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);
  const [notifVisible, setNotifVisible] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const greyHeaderStyle = {
    ...greyHeaderBaseStyle,
    backgroundColor: isDark ? "#2E2E2E" : "#F3F4F7",
    color: isDark ? "#ddd" : "#7A869A",
  };

  const mainContentStyle = {
    marginLeft: sidebarWidth,
    marginTop: headerHeight + 50,
    padding: 24,
    width: 1172,
    minHeight: 536,
    backgroundColor: isDark ? "#121212" : "#fff",
    color: isDark ? "#eee" : "#000",
    borderRadius: 16,
    boxSizing: "border-box",
    position: "relative",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  const tableStyle = {
    display: "flex",
    flexDirection: "column",
    overflowX: "auto",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingTop: 12,
  };

  const rowStyle = {
    display: "flex",
    borderBottom: "1px solid #e5e8ef",
    padding: "12px 16px",
    fontSize: 14,
  };

  const headerRowStyle = {
    ...rowStyle,
    fontWeight: 600,
    borderBottom: "none",
    backgroundColor: isDark ? "#444" : "#f3f4f7",
  };

  const cellStyle = {
    flex: 1,
  };

  const sampleOrders = [
    {
      orderId: "#CM9801",
      user: "Natali Craig",
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      orderId: "#CM9802",
      user: "Kate Morrison",
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    // Add more rows
  ];

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
          title="Order Dashboard"
        />
        <div style={greyHeaderStyle}>Order List</div>
        <div style={mainContentStyle}>
          <div style={tableStyle}>
            <div style={headerRowStyle}>
              <div style={cellStyle}>Order ID</div>
              <div style={cellStyle}>User</div>
              <div style={cellStyle}>Project</div>
              <div style={cellStyle}>Address</div>
              <div style={cellStyle}>Date</div>
              <div style={cellStyle}>Status</div>
            </div>
            {sampleOrders.map((order, idx) => (
              <div
                key={order.orderId}
                style={{
                  ...rowStyle,
                  backgroundColor: isDark
                    ? idx % 2 === 0
                      ? "#232323"
                      : "#1a1a1a"
                    : idx % 2 === 0
                    ? "#ffffff"
                    : "#fafbfc",
                }}
              >
                <div style={cellStyle}>{order.orderId}</div>
                <div style={cellStyle}>{order.user}</div>
                <div style={cellStyle}>{order.project}</div>
                <div style={cellStyle}>{order.address}</div>
                <div style={cellStyle}>{order.date}</div>
                <div style={cellStyle}>{order.status}</div>
              </div>
            ))}
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
