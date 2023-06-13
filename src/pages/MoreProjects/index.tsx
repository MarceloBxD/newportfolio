import React from "react";
import * as C from "./styles";

import {
  barbearia,
  climatempo,
  metamask,
  quiz,
  texttransform,
  git,
  reciclelivros,
} from "../../../public/images";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Recicle Livros",
      img: reciclelivros,
      url: "https://github.com/MarceloBxD/livrosseminovos",
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
    {
      id: 7,
      title: "Template Barbearia",
      img: barbearia,
      url: "https://elbidogon-template.netlify.app/",
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
      <Link to="/">
        <C.ButtonLeft title="Voltar para página inicial">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </C.ButtonLeft>
      </Link>
    </C.Container>
  );
};

export default Projects;
