import React from "react";
import "./MainContainer.scss";

function MainContainer({ children }: { children: React.ReactNode }) {
  return <div className="MainContainer">{children}</div>;
}

export default MainContainer;
