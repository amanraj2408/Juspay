import React from "react";
import { useNavigate } from "react-router-dom";
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
  boxSizing: "border-box",
  cursor: "pointer", // show pointer cursor
};

export default function Card() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/orders"); // Navigate to your order dashboard route
  };

  return (
    <div style={cardStyles} onClick={handleClick} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') handleClick(); }}>
      <CardSVG style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
