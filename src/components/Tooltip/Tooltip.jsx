import React from "react";

const Tooltip = (props) => {
  const { view, text } = props;
  const visibility = view ? 'visible' : 'hidden';
  const opacity = view ? '1' : '0';

  return (
    <div className="tooltip" style={{ visibility: visibility, opacity: opacity }}>
      <div className="tooltip__img"></div>
      <div className="tooltip__text">
        <h4 className="tooltip__title">UX Lead</h4>
        <p className="tooltip__subtitle">{text}</p>
      </div>
    </div>
  )
};

export default Tooltip;
