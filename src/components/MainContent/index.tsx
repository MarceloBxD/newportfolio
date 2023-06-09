import React, { useState } from "react";
import * as C from "./styles";
import * as S from "../Aside/styles";
import freela from "../../images/freela.jpg";
import programmer from "../../images/programmer.jpg";
import mobile from "../../images/mobile.jpg";
import { Link } from "react-router-dom";

const MainContent: React.FC = () => {
  const [imageActive, setImageActive] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <C.Container
      style={{
        backgroundImage: `url(${imageActive})`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <C.HamburgerMenu onClick={() => setOpenModal(!openModal)}>
        {openModal ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={35}
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width={35}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </C.HamburgerMenu>
      {openModal && (
        <C.Modal>
          <svg
            onClick={() => setOpenModal(!openModal)}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "20px",
              right: "20px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={35}
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <Link style={{ textDecoration: "None" }} to="/projects">
            <C.ModalItem>MY PROJECTS</C.ModalItem>
          </Link>
          <Link style={{ textDecoration: "None" }} to="/about">
            <C.ModalItem>ABOUT ME</C.ModalItem>
          </Link>
        </C.Modal>
      )}
      <C.Content>
        <S.TextGray>MY WORK</S.TextGray>
        <C.Title
          onMouseEnter={() => setImageActive(freela)}
          onMouseLeave={() => setImageActive(null)}
        >
          Front End
        </C.Title>
        <C.Title
          onMouseOver={() => setImageActive(programmer)}
          onMouseLeave={() => setImageActive(null)}
        >
          Back End
        </C.Title>
        <C.Title
          onMouseEnter={() => setImageActive(mobile)}
          onMouseLeave={() => setImageActive(null)}
        >
          Mobile
        </C.Title>
      </C.Content>
    </C.Container>
  );
};

export default MainContent;
