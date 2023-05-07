import React,{useContext} from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
import logo from '../../assets/gdsc-logo.png'
import { themeContext } from "../../Context";

function Navbar() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="nav">
      <Toggle />
      <ul style={{listStyleType : "none"}}>
      <img className="logo" src={logo}alt=''/>
        <li style={{ color: darkMode ? "white" : "" }} className="head">Google Developer Student Clubs</li>
        <span className="h-span">Geetanjali Institute Of Technical Studies</span>
      </ul>
      <div className="n-list">
        <ul style={{ listStyleType: "none" }}>
          <Link spy={true} to="Home" smooth={true} activeClass="activeClass" className="Navicon">
            <li>Home</li>
          </Link>
          <Link spy={true} to="About" smooth={true} className="Navicon">
            <li>About</li>
          </Link>
          <Link spy={true} to="Team" smooth={true} className="Navicon">
            <li>Team</li>
          </Link>
          <Link spy={true} to="Events" smooth={true} className="Navicon">
            <li>Events</li>
          </Link>
          <Link spy={true} to="Gallery" smooth={true} className="Navicon">
            <li>Gallery</li>
          </Link>
          <Link spy={true} to="faq" smooth={true} className="Navicon">
          <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
