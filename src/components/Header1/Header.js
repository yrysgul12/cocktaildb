import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className={s.navbar}>
      <div className="container">
        <div className={s.navbar_content}>
          <Link to='/'>
          <img width={296} height={41} src={logo} alt="" />

          </Link>
          <form className={s.form_control}>
            <input type="text" placeholder="Search" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
