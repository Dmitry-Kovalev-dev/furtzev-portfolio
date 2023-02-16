import React, { useState } from "react";
import chick from "../../images/chick.png";
import Gallery from "../Gallery/Gallery";
import Tooltip from "../Tooltip/Tooltip";

const Lead = (props) => {
  const { text } = props;
  const [viewTooltip, setViewTooltip] = useState(false);
  const [viewGallery, setViewGallery] = useState(false);
  const windowWidth = window.innerWidth;

  const viewingTooltip = () => {
    if (windowWidth < 1024) {
      return;
    }
    setViewTooltip(true);
  };

  const hidingTooltip = () => {
    if (windowWidth < 1024) {
      return;
    }
    setViewTooltip(false);
  };

  const viewingGallery = () => {
    if (windowWidth < 1024) {
      return;
    };
    setViewGallery(true);
  };

  const hidingGallery = () => {
    if (windowWidth < 1024) {
      return;
    };
    setViewGallery(false);
  };


  return (
    <section className="lead">
      <p className="lead__greet">
        <span className="lead__greet-icon"></span>
        {text.greeting}&#8194;
        <span
          className="lead__my-name"
          onPointerEnter={viewingGallery}
          onPointerLeave={hidingGallery}
        >{text.iAm}</span>
      </p>
      <h1 className="lead__title">UX/UI Lead</h1>
      <p className="lead__subtitle">
        {text.leadSubtitle}&#8194;
        <a
          onPointerEnter={viewingTooltip}
          onPointerLeave={hidingTooltip}
          className="lead__link"
          href="https://t.me/uxlead"
          target="_blank"
          rel="noreferrer"
        >
          UX&#160;Lead&#160;
          <img className="lead__link-icon" src={chick} alt="icon" />
        </a>
      </p>
      {
        windowWidth > 1023
          ? <>
            <Tooltip
              view={viewTooltip}
              text={text.tooltip}
            />
            <Gallery
              view={viewGallery}
            />
          </>
          : null
      }

    </section>
  )
};

export default Lead;
