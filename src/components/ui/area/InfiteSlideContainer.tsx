import React from "react";
import "./InfiniteSlideContainer.scss";

function InfiteSlideContainer({ children, slideClassName, reverseSlideClassName }: { children: React.ReactNode; slideClassName?: string; reverseSlideClassName?: string }) {
  return (
    <div className={`InfiteSlideContainer`}>
      {/* <div className={`InfiteSlideContainer_slider-reverse ${reverseSlideClassName}`}> */}
      <div className={`InfiteSlideContainer_slider ${slideClassName}`}>{children}</div>
      {/* </div> */}
      {/* <div className={`InfiteSlideContainer_slider-reverse ${reverseSlideClassName}`}> */}
      <div className={`InfiteSlideContainer_slider ${slideClassName}`}>{children}</div>
      {/* </div> */}
    </div>
  );
}

export default InfiteSlideContainer;
