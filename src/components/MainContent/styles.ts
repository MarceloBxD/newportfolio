import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const HamburgerMenu = styled.div`
  background-color: #ebff00;
  color: #000;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 20px;
  padding: 1.2rem;
  position: absolute;
  right: 20px;
  bottom: 120px;
  animation: fade 1s ease-in-out normal;

  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Title = styled.h2`
  font-size: 52px;
  font-weight: 700;
  text-align: center;
  color: #000;
  transition: all 0.2s ease-in;

  &:hover {
    cursor: pointer;
    background-color: #ebff00;
  }
`;

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  animation: slideFromTop 1s ease-in-out normal;

  @keyframes slideFromTop {
    0% {
      transform: translateY(-100vh);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const ModalItem = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  padding: 10px;
  color: #000;
  transition: all 0.2s ease-in;

  &:hover {
    cursor: pointer;
  }
`;
