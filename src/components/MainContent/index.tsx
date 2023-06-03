import React, { useState } from "react";
import * as C from "./styles";
import * as S from "../Aside/styles";
import freela from "../../../public/images/freela.jpg";
import programmer from "../../../public/images/programmer.jpg";
import mobile from "../../../public/images/mobile.jpg";

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
          <svg></svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width={35}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </C.HamburgerMenu>
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
