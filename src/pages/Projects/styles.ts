import styled from "styled-components";

export const ProjectsContainer = styled.main`
  width: 62.5rem;
  height: 43.75rem;
  margin: 3.12rem 3.375rem 4.25rem 30rem;

  display: flex;
  flex-direction: row;
  text-align: center;

  gap: 2rem;

  font-family: "Roboto Mono";
  color: ${(props) => props.theme["white"]};

  h1 {
    font-size: 2.2rem;
  }
`;

export const CurrentProjects = styled.div`
  margin-left: 5rem;
`;

export const AcademicsProjects = styled.div`
  margin-left: 5rem;
`;

export const BoxProjects = styled.div`
  width: 80%;
  height: 8rem;
  background: ${(props) => props.theme["black"]};
  margin: 2rem;

  border-radius: 32px;

  h2 {
    padding: 1rem 0 1.5rem;
  }
`;

export const ButtonProjects = styled.button`
  width: 50%;
  height: 2rem;
  border-radius: 8px;
  background: ${(props) => props.theme["blue-400"]};

  border: none;

  &:hover {
    color: ${(props) => props.theme["blue-300"]};
  }

  a {
    color: ${(props) => props.theme["white"]};
    text-decoration: none;
  }
`;
