import React, { useEffect, useState } from "react";
import { photography } from "../../utils/data";

const Gallery = (props) => {
  const { view } = props;
  const visibility = view ? 'visible' : 'hidden';
  const [index, setIndex] = useState(0);
  const photo = photography[index];

  useEffect(() => {
    let interval;
    if (view) {
      interval = setInterval(() => {
        setIndex(old => old + 1 > photography.length - 1 ? 0 : old + 1)
      }, 600);
    }
    return () => clearInterval(interval)
  });

  return (
    <div className="gallery" style={{ visibility: visibility, backgroundImage: "url(" + photo + ")" }} >

    </div>
  )
};

export default Gallery;
