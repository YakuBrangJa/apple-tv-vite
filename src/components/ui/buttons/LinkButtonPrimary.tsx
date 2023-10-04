import React from "react";
import "./LinkButtonPrimary.scss";
import { Link } from "react-router-dom";

interface LinkProps {
  config?: {
    width?: "full" | "fit";
    size?: "small" | "normal" | "large";
    bgColor?: string;
    textColor?: string;
  };
  to: string;
  children: React.ReactNode;
}

function LinkButtonPrimary(props: LinkProps) {
  const {
    children,
    config = {
      width: "fit",
      size: "normal",
      bgColor: "#ffffff",
      textColor: "#111111",
    },
  } = props;

  const { width = "fit", size = "normal", bgColor = "#ffffff", textColor = "#111111" } = config!;

  return (
    <span
      className={`LinkButtonPrimary size-${size} width-${width} `}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}>
      <Link {...props}>{children}</Link>
    </span>
  );
}

export default LinkButtonPrimary;
