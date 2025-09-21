import React from "react";
import { Drawer, Avatar, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";

const sidebarStyles = {
  width: 212,
  height: 1206,
  borderRight: "1px solid #e2e4e8",
  paddingTop: 20,
  paddingRight: 16,
  paddingBottom: 20,
  paddingLeft: 16,
  gap: 16,
  opacity: 1,
  display: "flex",
  flexDirection: "column",
  background: "#fff",
};

export default function Sidebar({ open, onClose }) {
  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={onClose}
      open={open}
      width={212}
      bodyStyle={sidebarStyles}
      mask={false}
    >
      {/* Profile Icon */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
        <Avatar size={40} icon={<UserOutlined />} />
        <div style={{ fontWeight: 700, fontSize: 16, marginLeft: 12 }}>ByeWind</div>
      </div>

      {/* Section: Favorites/Recently */}
      <div style={{ color: "#888", fontWeight: 500, marginBottom: 6 }}>Favorites</div>
      <div style={{ color: "#888", fontWeight: 500, marginBottom: 16 }}>Recently</div>

      {/* Dashboards */}
      <div style={{ color: "#8E92BC", fontWeight: 500, marginBottom: 8 }}>Dashboards</div>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Default</div>
      <div style={{ marginBottom: 8 }}>eCommerce</div>
      <div style={{ marginBottom: 8 }}>Projects</div>
      <div style={{ marginBottom: 16 }}>Online Courses</div>

      {/* Pages Section */}
      <Divider />
      <div style={{ color: "#8E92BC", fontWeight: 500, marginBottom: 8 }}>Pages</div>
      <div style={{ marginBottom: 8 }}>User Profile</div>
      <div style={{ marginBottom: 8, paddingLeft: 8 }}>Overview</div>
      <div style={{ marginBottom: 8, paddingLeft: 8 }}>Projects</div>
      <div style={{ marginBottom: 8, paddingLeft: 8 }}>Campaigns</div>
      <div style={{ marginBottom: 8, paddingLeft: 8 }}>Documents</div>
      <div style={{ marginBottom: 8, paddingLeft: 8 }}>Followers</div>
      <div style={{ marginBottom: 8, paddingLeft: 8 }}>Account</div>
      <div style={{ marginBottom: 8, paddingLeft: 8 }}>Corporate</div>
      <div style={{ marginBottom: 8, paddingLeft: 8 }}>Blog</div>
      <div style={{ marginBottom: 8, paddingLeft: 8 }}>Social</div>
    </Drawer>
  );
}
