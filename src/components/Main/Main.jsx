import React from "react";
import Career from "../Career/Career";
import Contact from "../Contact/Contact";
import Lead from "../Lead/Lead";
import Projects from "../Projects/Projects";

const Main = (props) => {
  const { text, isLangPage } = props;

  return (
    <main className="content">
      <Lead
        text={text}
      />
      <Projects
        text={text}
        isLangPage={isLangPage}
      />
      <Career
        text={text}
        isLangPage={isLangPage}
      />
      <Contact
        text={text}
      />
    </main>
  )
};

export default Main;
