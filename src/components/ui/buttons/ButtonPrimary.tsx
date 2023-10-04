import React from "react";
import "./ButtonPrimary.scss";

interface ButtonProps {
  config?: {
    width?: "full" | "fit";
    size?: "small" | "normal" | "large";
    bgColor?: string;
    textColor?: string;
  };
}

function ButtonPrimary(props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonProps) {
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
    <button
      {...props}
      className={`ButtonPrimary size-${size} width-${width} `}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}>
      {children}
    </button>
  );
}

export default ButtonPrimary;
