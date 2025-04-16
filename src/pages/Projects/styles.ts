import styled from "styled-components";

export const ProjectsContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 3.12rem 3.375rem 4.25rem 28rem;

  gap: 2rem;

  font-family: "Roboto Mono";
  color: ${(props) => props.theme["white"]};

  h1 {
    font-size: 2.2rem;
  }
`;

export const CurrentProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  div {
    flex: 1 1 calc(40% - 1rem);
    box-sizing: border-box;
  }
`;

export const BoxProjects = styled.div`
  flex: 1 1 calc(40% - 1rem);
  max-width: calc(40% - 1rem); // Evita que ultrapasse

  background: ${(props) => props.theme["black"]};
  text-align: center;
  border-radius: 32px;

  &:hover {
    box-shadow: 0 0 1rem ${(props) => props.theme["blue-400"]};
    transition: all 1s;
  }

  h2 {
    padding: 1rem;
    text-align: center;
  }

  p {
    text-align: justify;
    padding: 0.5rem 4rem;
    font-family: "Roboto";
  }
`;

export const ButtonProjects = styled.button`
  width: 10rem;
  height: 2rem;
  border-radius: 8px;
  background: ${(props) => props.theme["blue-400"]};
  margin: 1rem;

  border: none;

  &:hover {
    transition: all 1.5s;
    background: ${(props) => props.theme["blue-300"]};
    font-weight: bolder;
  }

  a {
    color: ${(props) => props.theme["white"]};
    text-decoration: none;
  }
`;
