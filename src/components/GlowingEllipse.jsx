import React from "react";

const GlowingEllipse = ({
  width,
  height,
  left,
  top,
  opacity,
  background,
  blur,
  rotation,
  zIndex = 1,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        width,
        height,
        left,
        top,
        opacity,
        background,
        filter: `blur(${blur}px)`,
        borderRadius: "50%",
        transform: `rotate(${rotation}deg)`,
        zIndex,
      }}
    />
  );
};

export default GlowingEllipse;
