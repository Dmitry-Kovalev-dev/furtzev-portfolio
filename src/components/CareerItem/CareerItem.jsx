import React from "react";

const CareerItem = (props) => {
  const { date, company, position, logo } = props;

  return (
    <div className="career-item__box">
      <p className="career-item__date">{date}</p>
      <div className="career-item__info">
        <div className="career-item__logo" style={{ backgroundImage: "url(" + logo + ")" }}></div>
        <div className="career-item__text">
          <h3 className="career-item__company">{company}</h3>
          <p className="career-item__position">{position}</p>
        </div>
      </div>
    </div>
  )
};

export default CareerItem;