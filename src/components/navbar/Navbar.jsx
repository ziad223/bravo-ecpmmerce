import "./Navbar.css";
import logo from "../../imgs/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = ({ cartItems, dark, setDark, isDark }) => {
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 0) {
        document.querySelector(".navbar").style =
          "box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;";
      } else {
        document.querySelector(".navbar").style = "box-shadow: none";
      }
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <p>Bravo Company</p>
      </div>
      <div className="call">
        <FaPhoneAlt />
        <p>01064031614</p>
      </div>

      <div className="navbar-icon">
        {dark ? (
          <FiSun className="sun" onClick={isDark} />
        ) : (
          <FiMoon onClick={isDark} className="moon" />
        )}
      </div>

      <div className="cart">
        <Link to="/cart">
          <MdOutlineShoppingBag className="cart-icon" />
        </Link>
        <span>{cartItems.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
