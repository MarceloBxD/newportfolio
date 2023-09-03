import React from "react";
import * as C from "./styles";

import { Link } from "react-router-dom";

const About: React.FC = () => {
  const courses = [
    {
      id: 1,
      teacher: "Bonieky Lacerda",
      url: "https://b7web.com.br/",
      img: "https://guiadeti.com.br/wp-content/uploads/2022/04/guia-cursos-b7web.png",
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
      img: "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Emblem.png",
    },
  ];

  return (
    <C.Container>
      <C.Title>Desenvolvedor Front-End</C.Title>

      <C.AboutText>Sobre</C.AboutText>
      <C.Description>
        <br />
        <span style={{ fontSize: "18px", color: "#222" }}>
          E aí, pessoal! 😄 Sou um entusiasta de tecnologia com uma paixão
          fervorosa pelo mundo da programação. Minha jornada começou lá atrás,
          quando entrei no curso do Bonieky Lacerda, na famosa B7Web. Foi ali
          que meu interesse pela área explodiu como fogos de artifício em uma
          festa. Lá dentro, me aventurei por todos os cantos do desenvolvimento
          web e mobile, do básico ao avançado, devorando conhecimento como se
          fosse pizza no meio da madrugada. De HTML a React, passando por
          Node.js e bancos de dados, mergulhei de cabeça em um oceano de códigos
          e não quis mais sair. No começo, eu vivia e respirava React, mas
          agora, na agência em que trabalho, a bola da vez é o Next.js. A vida
          de um desenvolvedor é assim, sempre se adaptando às ondas do mundo
          digital! Falando em trabalho, tive a oportunidade de contribuir com um
          projeto incrível na agência, o CBLConsultoria. Criamos um site que
          vende precatórios e ainda integramos um blog para que o cliente possa
          compartilhar suas histórias e informações valiosas usando um CMS super
          prático. Foi uma experiência enriquecedora e desafiadora que me
          ensinou muito sobre o poder da programação na vida das pessoas. E não
          para por aí! Estamos agora embarcando em uma jornada emocionante com o
          Faro Beach Club, uma das casas de festas mais famosas do Rio de
          Janeiro, da mesma turma da Vitrinni. Vai ser um projeto e tanto, e
          estou ansioso para ver o resultado brilhante que vamos alcançar. Além
          disso, estou trilhando meu caminho acadêmico na UERJ, cursando
          Engenharia de Computação para aprofundar ainda mais meu conhecimento e
          habilidades. Estou aqui buscando novas oportunidades para crescer e
          contribuir com uma equipe talentosa em uma empresa incrível. Então, se
          você está procurando um desenvolvedor apaixonado por código, com uma
          bagagem repleta de aprendizado e um toque de diversão, conte comigo!
          Vamos construir coisas incríveis juntos! Mal posso esperar para fazer
          parte do seu time e encarar novos desafios. Vamos nessa! 🚀
        </span>
      </C.Description>
      <Link to="/">
        <C.ButtonLeft title="Voltar para página inicial">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
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
