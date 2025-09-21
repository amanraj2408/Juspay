import React from "react";
import { Bell, Menu, Moon, Search, Sun, RefreshCcw } from "lucide-react";

const headerStyles = {
  width: 948,
  height: 68,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#fff",
  borderBottom: "1px solid rgba(28, 28, 28, 0.1)",
  paddingTop: 20,
  paddingRight: 28,
  paddingBottom: 20,
  paddingLeft: 28,
  boxSizing: "border-box",
  position: "absolute",
  top: 0,
  left: 212,
  opacity: 1,
  zIndex: 10,
};

export default function Header({
  onToggleSidebar,
  onToggleTheme,
  isDark,
  onShowNotifications,
  onRefresh,
  title = "Dashboard / Default",
}) {
  return (
    <header style={headerStyles}>
      {/* Sidebar toggle */}
      <button onClick={onToggleSidebar} aria-label="Toggle sidebar" style={{ background: "none", border: "none", cursor: "pointer" }}>
        <Menu size={20} />
      </button>

      {/* Title */}
      <h1 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{title}</h1>

      {/* Search bar */}
      <div style={{ flex: 1, marginLeft: 20, marginRight: 20, maxWidth: 400, position: "relative" }}>
        <Search size={16} style={{ position: "absolute", top: "50%", left: 10, transform: "translateY(-50%)", color: "#999" }} />
        <input
          placeholder="Search…"
          style={{
            width: "100%",
            height: 36,
            paddingLeft: 35,
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: 14,
            outline: "none",
          }}
        />
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={onRefresh} aria-label="Refresh" style={{ background: "none", border: "none", cursor: "pointer" }}>
          <RefreshCcw size={20} />
        </button>
        <button onClick={onShowNotifications} aria-label="Notifications" style={{ background: "none", border: "none", cursor: "pointer" }}>
          <Bell size={20} />
        </button>
        <button onClick={onToggleTheme} aria-label="Toggle theme" style={{ background: "none", border: "none", cursor: "pointer" }}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}
