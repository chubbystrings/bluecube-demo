import React from "react";
import { DropdownStyles } from "../../styles/Dropdown.style";
import { AiTwotoneHeart} from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import avatar from "../../assets/avatar.png";
import { IconContext } from "react-icons";

export default function Dropdown(props: {visible: boolean}) {
  return (
    <DropdownStyles visible={props.visible}>
      <ul>
        <li>
          <img src={avatar} alt="avatar" />
          <div>
            <p>Jacked liked you</p>
            <small>About 2 Seconds Ago</small>
          </div>
          <AiTwotoneHeart />
        </li>
        <li>
          <img src={avatar} alt="avatar" />
          <div>
            <p>Jacked liked you</p>
            <small>About 2 Seconds Ago</small>
          </div>
          <IconContext.Provider value={{ color: "#c63635" }}>
            <AiTwotoneHeart />
          </IconContext.Provider>
        </li>
        <li>
          <img src={avatar} alt="avatar" />
          <div>
            <p>Jacked liked you</p>
            <small>About 2 Seconds Ago</small>
          </div>
          <IconContext.Provider value={{ color: "#3b33a1" }}>
            <RiMessage2Fill />
          </IconContext.Provider>
        </li>
      </ul>
    </DropdownStyles>
  );
}
