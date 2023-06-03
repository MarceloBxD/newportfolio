import styled from "styled-components";

export const Container = styled.aside`
  background-color: #fff;
  padding: 1.2rem;
  width: 380px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

export const AsideLogo = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #ebff00;
  display: flex;
  font-size: 25px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  transition: all 0.2s ease-in;
  margin-bottom: 2rem;
  animation: rotate 1s ease-in-out normal;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg) scale(1.2);
    }
  }

  :hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;

export const IntroArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

export const TextGray = styled.span`
  color: #999;
  font-size: 14px;
  font-weight: 400;
  text-align: center;

  animation: blink 1s ease-in-out normal;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Presentation = styled.h2`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  color: #000;
  margin-bottom: 1rem;
  animation: slideFromLeft 1s ease-in-out normal;

  @keyframes slideFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const SocialMediaArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 1rem;
  animation: slideFromBottom 1s ease-in-out normal;

  @keyframes slideFromBottom {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SocialMediaIcon = styled.a`
  width: 40px;
  height: 40px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in;

  :hover {
    background-color: #ebff00;
    color: #000;
  }
`;

export const SocialMediaFlex = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
