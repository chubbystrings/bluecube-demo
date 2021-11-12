import React from "react";
import ava from "../../assets/avatar.png";
import { AvatarWrapper } from "../../styles/AvatarSection.style";
import { IoIosNotifications } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Avatar() {
  const handleClick = () => {};
  return (
    <AvatarWrapper>
      <div className="notification-wrapper">
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
      </div>
      <div className="avatar">
        <div className="avatar-wrapper">
          <img src={ava} alt="avatar" />
          <div className="notify"></div>
          <div className="name-wrapper">
            <p>Abigail</p>
          </div>
        </div>
      </div>
    </AvatarWrapper>
  );
}
