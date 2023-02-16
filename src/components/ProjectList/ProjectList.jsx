import React from "react";
import Project from "../Project/Project";
import { projects } from "../../utils/data";

const ProjectList = (props) => {
  const { text, isLangPage } = props;
  return (
    <div className="project-list">
      {
        projects.map((project, id) => {
          return (
            <Project
              key={id}
              titleRU={project.titleRU}
              titleEN={project.titleEN}
              img={project.img}
              released={project.released}
              selector={project.size}
              text={text}
              isLangPage={isLangPage}
            />
          )
        })
      }
    </div>
  )
};

export default ProjectList;
