import React from "react";

const Sticker = (props) => {
  const { position } = props;

  const className = `sticker ${position || ""}`
  return (
    <button type="button" className={className}>Coming soon</button>
  )
};

export default Sticker;
