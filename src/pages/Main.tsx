import React from "react";
import Navbar from "../components/layouts/main/NavBar";
import BackgroundClip from "../components/layouts/main/BackgroundClip";
import HeroSection from "../components/layouts/main/HeroSection";
import MovieCarousel from "../components/layouts/main/MovieCarousel ";
import DevicePlatforms from "../components/layouts/main/DevicePlatforms";
import FAQ from "../components/layouts/main/FAQ";
import Footer from "../components/layouts/main/Footer";
import AppleBundles from "../components/layouts/main/AppleBundles";

function Main() {
  return (
    <div>
      <Navbar />
      <BackgroundClip />
      <HeroSection />
      <MovieCarousel />
      <DevicePlatforms />
      <FAQ />
      <AppleBundles />
      <Footer />
    </div>
  );
}

export default Main;
