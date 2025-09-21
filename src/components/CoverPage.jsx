import React from "react";
import { useNavigate } from "react-router-dom";
import GlowingEllipse from "./GlowingEllipse";
import { Button } from "antd";

export default function FullScreenAssignmentCover() {
  const navigate = useNavigate();

  const onOpenDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        minHeight: 600,
        background: "#171717",
        opacity: 1,
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', 'Roboto', Arial, sans-serif",
      }}
    >
      {/* Grill/Grid Pattern */}
      <div
        style={{
          position: "absolute",
          left: "2.6vw",
          top: "0.5vh",
          width: "37.2vw",
          height: "66.2vh",
          opacity: 0.2,
          zIndex: 2,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(transparent 29px, #FFF 30px, transparent 31px),
            linear-gradient(90deg, transparent 29px, #FFF 30px, transparent 31px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <GlowingEllipse
        width={"40.5vw"}
        height={"47.1vh"}
        left={"23.65vw"}
        top={"-57.4vh"}
        opacity={0.8}
        background="#12E6C8"
        blur={120}
        rotation={33.88}
      />

      <GlowingEllipse
        width={"36.8vw"}
        height={"59.0vh"}
        left={"50.9vw"}
        top={"71.1vh"}
        opacity={0.8}
        background="#A287F4"
        blur={120}
        rotation={33.88}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingLeft: "6.7vw",
          paddingTop: "12.9vh",
          color: "#fff",
        }}
      >
        <div>
          <Button
            onClick={onOpenDashboard}
            style={{
              background: "#FFC043",
              borderRadius: 6,
              minWidth: 120,
              fontWeight: 600,
              letterSpacing: 1,
              padding: "3px 24px",
              color: "#171717",
              display: "inline-block",
              marginBottom: "1.5rem",
              boxShadow: "0 2px 6px #ffffff",
            }}
          >
            ASSIGNMENT
          </Button>
        </div>
        <div
          style={{
            fontSize: "4rem",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "0.6rem",
          }}
        >
          UI DEVELOPER
          <br />
          ASSIGNMENT
        </div>

        <div
          style={{
            marginTop: "10rem",
            fontSize: "0.9rem",
            color: "#ffffff",
            letterSpacing: 1.9,
            fontFamily: "space Mono, monospace",
          }}
        >
          COMPANY
        </div>
        <br />
        <div
          style={{
            fontFamily: "space Mono, monospace",
            fontWeight: 400,
            fontSize: "1rem",
            color: "#C1C1C1",
            marginTop: "0.25rem",
          }}
        >
          Juspay Technologies Private Limited
        </div>
      </div>
    </div>
  );
}
