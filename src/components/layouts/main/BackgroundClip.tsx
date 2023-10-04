import React from "react";
import "./style/BackgroundClip.scss";
// import sd from "../../../../public";

function BackgroundClip() {
  // const videoRef = React.useRef();

  // React.useEffect(() => {
  //   if (!videoRef.current) return;
  //   // videoRef.current.play();
  // }, [videoRef]);

  return (
    <div className="BackgroundClip">
      <video
        autoPlay
        muted
        playsInline
        // controls
        loop>
        <source
          src="../../../../public/hero_clip_2.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default BackgroundClip;
