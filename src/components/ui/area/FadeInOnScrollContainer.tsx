import React from "react";
import { useScroll, motion, useInView, useTransform } from "framer-motion";

function FadeInOnScrollContainer({ children }: { children: React.ReactNode }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref}>
      <motion.div
        style={{
          transform: isInView ? "translateY(-130px)" : "translateY(-60px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 0.8) 0.15s",
        }}>
        {children}
      </motion.div>
    </div>
  );
}

export default FadeInOnScrollContainer;
