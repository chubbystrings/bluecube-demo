import React, { useContext } from "react";
import { SideNavStyles } from "../../styles/SideNav.style";
import Logo from "../../assets/bluecube.png";
import { AiFillHome } from "react-icons/ai";
import { RiMessage2Fill, RiBarChart2Fill } from "react-icons/ri";
import { GiCornerFlag, GiPartyPopper, GiPikeman } from "react-icons/gi";
import { GrConnect } from "react-icons/gr";
import { MdGroups } from "react-icons/md";
import { StoreContext } from "../../../context/store";
import Avatar from "./Avatar";

const SideNav: React.FC = () => {
    const ctx = useContext(StoreContext)
  return (
    <SideNavStyles toggle={ctx.toggle}>
      <img className="logo" src={Logo} alt="logo" />
      <Avatar />
      <div className="row">
        <div className="col active">
          <AiFillHome />
          <button>Home</button>
        </div>
        <div className="col">
          <RiMessage2Fill />
          <button>Message</button>
        </div>
      </div>
      <h4>SHARE</h4>
      <div className="row">
        <div className="col">
          <RiBarChart2Fill />
          <button>Ranking</button>
        </div>
        <div className="col">
          <GiCornerFlag />
          <button>Challenge</button>
        </div>
        <div className="col">
          <GiPartyPopper />
          <button>Party</button>
        </div>
        <div className="col">
          <GrConnect />
          <button>Connect</button>
        </div>
        <div className="col">
          <GiPikeman />
          <button>Parade</button>
        </div>
        <div className="col">
          <MdGroups />
          <button>Group</button>
        </div>
      </div>
    </SideNavStyles>
  );
};

export default SideNav;
