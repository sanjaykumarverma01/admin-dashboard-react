import React from "react";
import "./Cards.css";
import { cardsData } from "../../data/Data";
import Card from "../singlecard/Card";
const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, index) => {
        return (
          <div className="parentContainer">
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
