import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../data/Data";
const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt={update.name} />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span> {update.notification}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
