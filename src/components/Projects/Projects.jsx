import React from "react";
import ProjectList from "../ProjectList/ProjectList";
import Title from "../Title/Title";

const Projects = (props) => {
  const { text, isLangPage } = props;
  return (
    <section className="projects" id="projects">
      <Title
        text={text.sectionProject} />
      <ProjectList
        text={text}
        isLangPage={isLangPage}
      />
    </section>

  )
};

export default Projects;
