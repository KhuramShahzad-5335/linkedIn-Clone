import "./Header.css";
import React from "react";
import logo from "../Assets/linkedin.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavOptions from "./NavOptions";

function Header() {
  return (
    <div className="header__container">
      <div className="header__left">
        {/* image */}
        <img src={logo} alt="logo" />
        {/* searchbar */}
        <div className="searchbar__container">
          <SearchIcon className="search__icon" />
          <input type="text" placeholder="Seach" />
        </div>
      </div>
      <div className="header__right">
        <NavOptions
          title="Home"
          Icon={HomeIcon}
          id="active"
          className="nav__icons"
        />
        <NavOptions title="Network" Icon={SupervisorAccountIcon} />
        <NavOptions title="Jobs" Icon={BusinessCenterIcon} />
        <NavOptions title="Chat" Icon={ChatIcon} />
        <NavOptions title="Notifications" Icon={NotificationsActiveIcon} />
        <NavOptions title="Me" Icon={AccountCircleIcon} />
      </div>
    </div>
  );
}

export default Header;
