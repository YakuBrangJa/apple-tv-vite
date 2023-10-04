import React from "react";
import "./style/HeroSection.scss";
import ButtonPrimary from "../../ui/buttons/ButtonPrimary";

import { SiAppletv } from "react-icons/si";
import { useScroll, motion, useInView, useTransform } from "framer-motion";
import FadeInOnScrollContainer from "../../ui/area/FadeInOnScrollContainer";

function HeroSection() {
  const { scrollY } = useScroll();
  const bgTransparancy = useTransform(scrollY, [0, 850], ["#05050500", "#050505ff"]);

  return (
    <motion.section
      className="HeroSection"
      style={{
        backgroundColor: bgTransparancy,
      }}>
      <div className="heroContainer">
        <HeroHeader />
        <HeroInfos />
        <HeroPricing />
      </div>
    </motion.section>
  );
}

export default HeroSection;

function HeroHeader() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 80], [1, 0]);

  return (
    <motion.div
      className="HeroHeader"
      style={{
        opacity,
      }}>
      <div className="heroHeading">
        <h1>
          <span>All Apple Originals.</span>
          <br />
          <span>Only on Apple TV+.</span>
        </h1>
        <ButtonPrimary config={{ size: "large", bgColor: "#ffffff" }}>Stream now</ButtonPrimary>
      </div>
      <div className="heroFooter">
        <p>
          Watch on the{" "}
          <span className="apple-tv_logo">
            <SiAppletv size={25} />
          </span>{" "}
          app
        </p>
      </div>
    </motion.div>
  );
}

function HeroInfos() {
  return (
    <div className="HeroInfos">
      <FadeInOnScrollContainer>
        <p>New Apple Originals every month — always ad‑free.</p>
      </FadeInOnScrollContainer>
      <FadeInOnScrollContainer>
        <p>Stream on the Apple TV app on Apple devices, smart TVs, consoles, or sticks.</p>
      </FadeInOnScrollContainer>
      <FadeInOnScrollContainer>
        <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
      </FadeInOnScrollContainer>
      <FadeInOnScrollContainer>
        <p>Share a single subscription with up to five people.</p>
      </FadeInOnScrollContainer>
    </div>
  );
}

function HeroPricing() {
  return (
    <FadeInOnScrollContainer>
      <div className="HeroPricing">
        <div>
          <h3 className="pricing-heading">
            <span>Buy an apple device</span>
            <br />
            <span>3 months free.</span>
          </h3>
          <p>Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.</p>
          <div>
            <ButtonPrimary>Check eligibility</ButtonPrimary>
          </div>
        </div>
        <div>
          <h3 className="pricing-heading">
            <span>Free 7-day trial</span>
            <br />
            <span>$6.99/mo.</span>
          </h3>
          <p>A monthly subscription is just $6.99 per month after a free 7-day trial. Share Apple TV+ with your family.3</p>
          <div>
            <ButtonPrimary>Try it free</ButtonPrimary>
          </div>
        </div>
        <div>
          <h3 className="pricing-heading">
            <span>Free 1-month trial</span>
            <br />
            <span>Apple one.</span>
          </h3>
          <p>
            Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less. <a href="">Learn more</a>
          </p>
          <div>
            <ButtonPrimary>Try Apple One free</ButtonPrimary>
          </div>
        </div>
      </div>
    </FadeInOnScrollContainer>
  );
}
