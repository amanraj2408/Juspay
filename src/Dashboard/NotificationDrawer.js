import React from "react";
import { Drawer, List, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const notificationsStyles = {
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


const notifications = [
  { text: "You have a bug that needs resolving.", time: "Just now" },
  { text: "New user registered", time: "59 minutes ago" },
  { text: "You have a bug that needs resolving.", time: "12 hours ago" },
  { text: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
];

const activities = [
  { name: "You have a bug that needs...", time: "Just now" },
  { name: "Released a new version", time: "59 minutes ago" },
  { name: "Submitted a bug", time: "12 hours ago" },
  { name: "Modified A data in Page X", time: "Today, 11:59 AM" },
];

const contacts = [
  { name: "Natali Craig" },
  { name: "Drew Cano" },
  { name: "Orlando Diggs" },
  { name: "Andi Lane" },
  { name: "Kate Morrison" },
  { name: "Koray Okumus" },
];

export default function NotificationDrawer({ open, onClose }) {
  return (
    <Drawer
      title={
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Avatar size="large" icon={<UserOutlined />} />
          <span style={{ fontWeight: 700, fontSize: 18 }}>Notifications</span>
        </div>
      }
      placement="right"
      onClose={onClose}
      open={open}
      width={280}
      bodyStyle={{notificationsStyles}}
    >
      <div>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Notifications</div>
        <List
          dataSource={notifications}
          renderItem={item => (
            <List.Item>
              <span>{item.text}</span>
              <span style={{ color: "#8e92bc", marginLeft: 8 }}>{item.time}</span>
            </List.Item>
          )}
        />
      </div>
      <div>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Activities</div>
        <List
          dataSource={activities}
          renderItem={item => (
            <List.Item>
              <span>{item.name}</span>
              <span style={{ color: "#8e92bc", marginLeft: 8 }}>{item.time}</span>
            </List.Item>
          )}
        />
      </div>
      <div>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Contacts</div>
        <List
          dataSource={contacts}
          renderItem={item => (
            <List.Item>
              <Avatar size="small" icon={<UserOutlined />} />
              <span style={{ marginLeft: 8 }}>{item.name}</span>
            </List.Item>
          )}
        />
      </div>
    </Drawer>
  );
}
