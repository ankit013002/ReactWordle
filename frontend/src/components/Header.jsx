import React from "react";
import "./Header.css";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const Header = () => {
  return (
    <div className="header-container">
      <div className="info-title-container">
        <FaRegQuestionCircle className="icon question-icon" />
        <div className="title-text">Wordle</div>
      </div>
      <div className="chart-settings-container">
        <MdBarChart className="icon chart-icon" />
        <IoMdSettings className="icon settings-icon" />
      </div>
    </div>
  );
};

export default Header;
