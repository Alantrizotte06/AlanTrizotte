import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const HomeContainer = styled.main`
  margin: 3.12rem 5rem 5rem 30rem;
  border-radius: 2rem;

  font-family: "Roboto Mono";
  color: ${(props) => props.theme["white"]};
`;

export const PersonalPresentation = styled.div`
  color: ${(props) => props.theme["blue-400"]};
  line-height: 3.5rem;
  font-weight: bold;
  font-size: 2.4rem;

  p:nth-child(1) {
    animation: ${slideIn} 0.8s;
  }

  p:nth-child(2) {
    color: ${(props) => props.theme["white"]};
    animation: ${slideIn} 1s;
  }

  p:nth-child(3) {
    animation: ${slideIn} 1.2s;
  }
`;

export const InfoSobreMim = styled.div`
  margin-top: 1.4rem;
  font-size: 22px;
  text-align: justify;
`;

export const SkillsImg = styled.div`
  display: flex;
  gap: 1.8rem;
  margin: 1.8rem 0 1.8rem 0;

  svg {
    color: ${(props) => props.theme["orange-400"]};
  }

  svg:nth-child(2),
  svg:nth-child(4),
  svg:nth-child(5) {
    color: ${(props) => props.theme["blue-400"]};
  }
`;
