import React from "react";
import "./style/NavBar.scss";
import MainContainer from "../../ui/area/MainContainer";
import { AiFillApple } from "react-icons/ai";
import { BsSearch, BsBag } from "react-icons/bs";
import ButtonPrimary from "../../ui/buttons/ButtonPrimary";
import LinkButtonPrimary from "../../ui/buttons/LinkButtonPrimary";

function Navbar() {
  return (
    <>
      {/* <div className="NavContainer"> */}
      <NavbarTop />
      <NavbarBottom />
      {/* </div> */}
    </>
  );
}

export default Navbar;

function NavbarContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="Navbar">
      <div className="NavContainer">{children}</div>
    </div>
  );
}

function NavbarTop() {
  return (
    <NavbarContainer>
      <nav className="NavbarTop">
        <span>
          <AiFillApple size={21} />
        </span>
        <span>Store</span>
        <span>Mac</span>
        <span>iPad</span>
        <span>iPhone</span>
        <span>Watch</span>
        <span>Vision</span>
        <span>AirPods</span>
        <span>TV&Home</span>
        <span>Entertainment</span>
        <span>Accessories</span>
        <span>Support</span>
        <span>
          <BsSearch size={16} />
        </span>
        <span>
          <BsBag size={17} />
        </span>
      </nav>
    </NavbarContainer>
  );
}
function NavbarBottom() {
  return (
    <NavbarContainer>
      <nav className="NavbarBottom">
        <div>
          <h1>Apple TV+</h1>
        </div>
        <div>
          <LinkButtonPrimary
            to="/tv"
            config={{
              size: "small",
              bgColor: "#f6f6f6",
            }}>
            Stream now
          </LinkButtonPrimary>
        </div>
      </nav>
    </NavbarContainer>
  );
}
