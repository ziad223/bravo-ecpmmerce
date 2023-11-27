import "./header.css";
import header from "../../imgs/header.png";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="header">
      <Typewriter
      className = 'Typewriter'
        options={{
          strings: ["Welcome To Bravo Company",
           "Best Programming Company in Sharkia"],
          autoStart: true,
          loop: true,
        }}
      />
      <div className="header-content">
        <div className="header-content-text">
        <h2>The Best Note Book <span>Collection 2023</span></h2>
        <h3>discount : <span>30%</span></h3>
        <button>Shop Now</button>
        </div>
        <img src={header} alt="" />
      </div>
    </div>
  );
};

export default Header;
