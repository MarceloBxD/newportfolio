import styled from "styled-components";

interface IProps {
  background?: string;
  bgColor?: string;
}

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 50px;
`;

export const AboutText = styled.h2`
  font-size: 48px;
  color: #555555;
  margin-top: 20px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Description = styled.p`
  font-size: 17px;
  text-align: left;
  color: #555555;
  margin: 40px 0;
  padding: 0 20px;
`;

export const ButtonLeft = styled.button`
  width: 40px;
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #000000;
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ebff00;
    color: #000000;
  }
`;

export const Courses = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 120px;
`;

export const Course = styled.div<IProps>`
  width: 300px;
  height: 300px;
  background-image: ${(props) => `url(${props.background})`};
  border-radius: 10px;
  background-color: ${(props) => `url(${props.bgColor})`};
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  background-position: center;
  background-size: contain;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  position: relative;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CourseTitle = styled.h3`
  font-size: 24px;
  color: #555555;
  margin-top: 20px;
`;

export const CourseTeacher = styled.h4`
  font-size: 18px;
  color: #555555;
  margin-top: 10px;

  position: absolute;
  bottom: 5px;
`;
