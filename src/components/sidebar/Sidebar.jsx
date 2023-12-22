import React, { useState } from "react";
import Logo from "../../images/logo.png";
import "./Sidebar.css";
import { SidebarData } from "../../data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* menu */}

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icons />
              <span>{item.heading}</span>
            </div>
          );
        })}

        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
