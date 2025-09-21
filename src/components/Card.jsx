import React from "react";
import { ReactComponent as CardSVG } from "../assests/card.svg"; 

const cardStyles = {
  width: 432,
  height: 252,
  gap: 28,
  borderRadius: 16,
  padding: 24,
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
  boxSizing: "border-box"
};

export default function Card() {
  return (
    <div style={cardStyles}>
      <CardSVG style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
