import React from "react";
import GlowingEllipse from "./GlowingEllipse";
import { Button } from "antd";


export default function FullScreenAssignmentCover({ onOpenDashboard }) {


  return (
    <div
      style={{
        width: "100vw",  // full viewport width
        height: "100vh", // full viewport height
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
          left: "2.6vw", // relative to viewport width (51px / 1920)
          top: "0.5vh",  // relative to viewport height (10px / 1080)
          width: "37.2vw",  // 714px / 1920
          height: "66.2vh", // 714px / 1080 (due to viewport height scaling)
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
        width={"40.5vw"}   // 777px / 1920
        height={"47.1vh"}  // 508px / 1080
        left={"23.65vw"}   // 454px / 1920
        top={"-57.4vh"}    // -618px / 1080
        opacity={0.8}
        background="#12E6C8"
        blur={120}
        rotation={33.88}
      />

      <GlowingEllipse
        width={"36.8vw"}   // 706px / 1920
        height={"59.0vh"}  // 637px / 1080
        left={"50.9vw"}    // 977px / 1920
        top={"71.1vh"}     // 767px / 1080
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
          paddingLeft: "6.7vw",  // 130px / 1920
          paddingTop: "12.9vh",  // 140px / 1080
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
