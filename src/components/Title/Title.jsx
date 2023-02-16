import React from "react";

const Title = (props) => {
  const { text } = props
  return (
    <h2 className="section-title">{text}</h2>
  )
};

export default Title;
