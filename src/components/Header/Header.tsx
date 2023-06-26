import classes from "./Header.module.scss";
import { RiMenu3Line } from "react-icons/ri";
import { HiXMark } from "react-icons/hi2";
import img from "../../assets/logo.svg";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <img src={img} alt="Logo" />
        </div>
        <div
          className={classes.icon}
          onClick={() => setShowMenu((e) => (e = !e))}
        >
          <RiMenu3Line />
        </div>
        <nav className={`${classes.nav} ${showMenu ? classes.active : ""}`}>
          <div
            className={classes.icon}
            onClick={() => setShowMenu(false)}
          >
            <HiXMark />
          </div>
          <a onClick={() => setShowMenu(false)} href="#hero">Home</a>
          <a onClick={() => setShowMenu(false)} href="#about">About Me</a>
          <a onClick={() => setShowMenu(false)} href="#projects">Projects</a>
          <a onClick={() => setShowMenu(false)} href="#skills">Skills</a>
          <a onClick={() => setShowMenu(false)} href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
