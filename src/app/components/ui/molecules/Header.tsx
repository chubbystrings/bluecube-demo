import React, { useState, useEffect, useRef } from "react";
import { HeaderStyles } from "../../styles/Header.style";
import Input from "./Input";
import { IoIosNotifications } from "react-icons/io";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import avatar from "../../assets/avatar.png";
import Dropdown from "./Dropdown";
import ToggleButton from "./ToggleButton";

export default function Header() {
  const [dropdownState, setDropdownState] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setDropdownState((prev) => !prev);
  };

  const outsideClick = (e: { target: any }) => {
    if (container.current?.contains(e.target)) {
      // inside click
      return;
    }
    setDropdownState(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", outsideClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", outsideClick);
    };
  }, []);
  return (
    <HeaderStyles ref={container}>
      <Input />
      <Dropdown visible={dropdownState} />
      <ToggleButton />
      <div className="avatar">
        <div
          className="icons"
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        >
          <IconContext.Provider value={{ size: "30px", color: "#3b33a1" }}>
            <IoIosNotifications />
          </IconContext.Provider>
          <div className="badge">3</div>
        </div>
        <div className="avatar-wrapper">
          <img src={avatar} alt="avatar" />
          <div className="notify"></div>
        </div>
        <div className="name-wrapper">
          <p>Abigail</p>

          <IconContext.Provider value={{ size: "10px" }}>
            <IoIosArrowDown />
          </IconContext.Provider>
        </div>
      </div>
    </HeaderStyles>
  );
}
