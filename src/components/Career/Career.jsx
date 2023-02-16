import React from "react";
import CareerList from "../CareerList/CareerList";
import Title from "../Title/Title";

const Career = (props) => {
  const { text, isLangPage } = props
  return (
    <section className="career" id="career">
      <Title
        text={text.sectionCareer}
      />
      <CareerList
        isLangPage={isLangPage}
      />
    </section>
  )
};

export default Career;