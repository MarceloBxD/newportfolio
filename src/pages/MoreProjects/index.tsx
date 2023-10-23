import React from "react";
import * as C from "./styles";

import { Link } from "react-router-dom";
import { LeftIcon } from "../../assets/icons/svgs/LeftIcon";
import { projects } from "../../data/projects";

const Projects: React.FC = () => {
  return (
    <C.Container>
      <C.Projects>
        {projects.map((project) => (
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to={project.url}
          >
            <C.Project key={project.id}>
              <C.ProjectTitle>{project.title}</C.ProjectTitle>
              <C.ProjectImage src={project.img} />
            </C.Project>
          </Link>
        ))}
      </C.Projects>
      <Link to="/">
        <C.ButtonLeft title="Voltar para página inicial">
          <LeftIcon />
        </C.ButtonLeft>
      </Link>
    </C.Container>
  );
};

export default Projects;
