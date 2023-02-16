import React from "react";
import { careerRU, careerEN } from "../../utils/data"
import CareerItem from "../CareerItem/CareerItem";

const CareerList = (props) => {
  const { isLangPage } = props;
  const career = isLangPage ? careerEN : careerRU;

  return (
    <div className="career-list">
      {
        career.map((item, id) => {
          return (
            <CareerItem
              key={id}
              date={item.date}
              company={item.company}
              position={item.position}
              logo={item.logo}
            />
          )
        })
      }
    </div>
  )
};

export default CareerList;
