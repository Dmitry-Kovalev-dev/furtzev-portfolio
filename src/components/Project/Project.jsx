import React from "react";
import Sticker from "../Sticker/Sticker";

const Project = (props) => {
  const { titleRU, titleEN, img, released, selector, text, isLangPage } = props;
  const title = isLangPage ? titleEN : titleRU;

  const className = `project ${selector}`
  return (
    <div className={className} style={{ backgroundImage: "url(" + img + ")" }}>
      {
        released ?
          '' :
          <Sticker
            position={"sticker_position_absolute"}
          />
      }
      <div className="project__cover">
        <h3 className="project__title">{title || text.soon}</h3>
        {
          released ?
            <a href="https://behance.com" className="project__link">
              {text.projectBtn}
              <span className="project__link-icon"></span>
            </a> :
            <Sticker
              position={"sticker_position_normal"}
            />
        }
      </div>
    </div>
  )
};

export default Project;
