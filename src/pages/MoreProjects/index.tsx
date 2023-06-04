import React from "react";
import * as C from "./styles";

import {
  barbearia,
  climatempo,
  metamask,
  quiz,
  texttransform,
  git,
} from "../../../public/images";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Template Barbearia",
      img: barbearia,
      url: "https://elbidogon-template.netlify.app/",
    },
    {
      id: 2,
      title: "Clima Tempo",
      img: climatempo,
      url: "https://weatherprojectmarcelo.netlify.app/",
    },
    {
      id: 3,
      title: "Github Stats",
      img: git,
      url: "https://github-stats-users.netlify.app/",
    },
    {
      id: 4,
      title: "Quiz",
      img: quiz,
      url: "https://quizreact-programandoficafacil.netlify.app/",
    },
    {
      id: 5,
      title: "Metamask",
      img: metamask,
      url: "https://metatask-web3.netlify.app/",
    },
    {
      id: 6,
      title: "Text Transformer",
      img: texttransform,
      url: "https://sage-chimera-61fb2d.netlify.app/",
    },
  ];

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
    </C.Container>
  );
};

export default Projects;
