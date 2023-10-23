import barbearia from "../images/barbearia.png";
import climatempo from "../images/climatempo.png";
import git from "../images/github.png";
import metamask from "../images/metamask.png";
import quiz from "../images/quiz.png";
import reciclelivros from "../images/reciclelivros.png";
import texttransform from "../images/TextTransformer.png";
import cbl from "../images/cbl.png";
import majorsfeedback from "../images/majorsfeedback.png";
import farobeachclub from "../images/farobeachclub.png";

type IProject = {
  id: number;
  title: string;
  img: string;
  url: string;
};

export const projects: IProject[] = [
  {
    id: 0,
    title: "Faro Beach Club",
    img: farobeachclub,
    url: "https://www.farobeachclub.com.br/",
  },
  {
    id: 1,
    title: "CBLConsultoria",
    img: cbl,
    url: "https://cblconsultoria.com.br",
  },
  {
    id: 2,
    title: "Sistema de Feedback",
    img: majorsfeedback,
    url: "https://feedbackmajors-client-4ae8-7li6uch9u-marcelobxd.vercel.app/",
  },
  {
    id: 3,
    title: "Metamask",
    img: metamask,
    url: "https://metatask-web3.netlify.app/",
  },
  {
    id: 4,
    title: "Quiz",
    img: quiz,
    url: "https://quizreact-programandoficafacil.netlify.app/",
  },
  {
    id: 5,
    title: "Recicle Livros",
    img: reciclelivros,
    url: "https://github.com/MarceloBxD/livrosseminovos",
  },
  {
    id: 6,
    title: "Github Stats",
    img: git,
    url: "https://github-stats-users.netlify.app/",
  },
  {
    id: 7,
    title: "Clima Tempo",
    img: climatempo,
    url: "https://weatherprojectmarcelo.netlify.app/",
  },
  {
    id: 8,
    title: "Template Barbearia",
    img: barbearia,
    url: "https://elbidogon-template.netlify.app/",
  },
  {
    id: 9,
    title: "Text Transformer",
    img: texttransform,
    url: "https://sage-chimera-61fb2d.netlify.app/",
  },
];
