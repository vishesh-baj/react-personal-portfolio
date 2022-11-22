import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vishesh Bajpayee</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
      <HeaderSocial />
    </header>
  );
};

export default Header;
