import React from "react";
import * as C from "./styles";

import { Link } from "react-router-dom";

const About: React.FC = () => {
  const courses = [
    {
      id: 1,
      teacher: "Bonieky Lacerda",
      url: "https://b7web.com.br/",
      img: "https://b7web.com.br/wp-content/uploads/2018/12/b7_logo.png",
    },
    {
      id: 2,
      teacher: "Guilherme Grillo",
      url: "https://cursos.dankicode.com/",
      img: "https://yt3.googleusercontent.com/ytc/AGIKgqNuiibt1stK9ZTRVOTOvaDiiTqw4GdYuqx5P5jIuQ=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 3,
      teacher: "Luiz Otávio Miranda",
      url: "https://www.udemy.com/course/python-3-do-zero-ao-avancado/",
      img: "https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og=w600-h300-pc0xffffff-pd",
    },
  ];

  return (
    <C.Container>
      <C.Title>Desenvolvedor Front-End</C.Title>

      <C.AboutText>Sobre</C.AboutText>
      <C.Image src="../../../public/images/me.jpg" />
      <C.Description>
        <span
          style={{ fontWeight: "bold", fontSize: "22px", color: "#000000" }}
        >
          Marcelo Bracet
        </span>
        , desenvolvedor front-end com foco em ReactJS. Apaixonado por
        programação com muita sede de aprendizado e sempre buscando novos
        desafios. Estou no processo de graduação em Engenharia de Computação
        pela UERJ. Algumas das tecnologias nas quais eu possuo conhecimento
        estão disponíveis no meu Linkedln. Atualmente faço parte de uma agência
        de desenvolvimento de software e já realizei alguns trabalhos como
        freelancer. Estou sempre tentando me manter atualizado e expandir minhas
        áreas de conhecimento. Já realizei diversos cursos que possuem grande
        participação na minha formação como desenvolvedor.
      </C.Description>
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

      <C.AboutText>Cursos</C.AboutText>
      <C.Courses>
        {courses.map((course) => (
          <Link style={{ textDecoration: "none" }} to={course.url}>
            <C.Course background={course.img} key={course.id}>
              <C.CourseTeacher>{course.teacher}</C.CourseTeacher>
            </C.Course>
          </Link>
        ))}
      </C.Courses>
    </C.Container>
  );
};

export default About;
