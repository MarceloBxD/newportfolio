import React from "react";
import * as C from "./styles";

// Icons
import { IoMdDownload } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { IconContext } from "react-icons";

// Currículo
import file from "../../../public/files/CV.pdf";

const Aside: React.FC = () => {
  const IconProvider = ({ children }: any) => {
    return (
      <IconContext.Provider value={{ color: "#FFF", size: "20px" }}>
        {children}
      </IconContext.Provider>
    );
  };

  const socialmedias = [
    {
      id: 1,
      name: "Github",
      url: "https://github.com/MarceloBxD",
      icon: (
        <IconProvider>
          <FiGithub />
        </IconProvider>
      ),
    },
    {
      id: 2,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/marcelo-bracet-b51938223/",
      icon: (
        <IconProvider>
          <GrLinkedinOption />
        </IconProvider>
      ),
    },
    {
      id: 3,
      name: "Download CV",
      url: file,
      icon: (
        <IconProvider>
          <IoMdDownload />
        </IconProvider>
      ),
    },
  ];

  return (
    <C.Container>
      <C.AsideLogo>mb.</C.AsideLogo>
      <C.IntroArea>
        <C.TextGray>INTRO</C.TextGray>
        <C.Presentation>
          Hi, I'm Marcelo, a React Developer based out of Brazil County, BR.
        </C.Presentation>
      </C.IntroArea>
      <C.SocialMediaArea>
        <C.TextGray>SOCIAL MEDIAS</C.TextGray>
        <C.SocialMediaFlex>
          {socialmedias.map((item) => (
            <C.SocialMediaIcon
              href={item.url}
              download={item.name === "Download CV" ? "CV.pdf" : ""}
            >
              {item.icon}
            </C.SocialMediaIcon>
          ))}
        </C.SocialMediaFlex>
      </C.SocialMediaArea>
    </C.Container>
  );
};

export default Aside;
