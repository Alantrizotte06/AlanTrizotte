import { Profile } from "../../components/Profile";
import {
  AcademicsProjects,
  BoxProjects,
  CurrentProjects,
  ProjectsContainer,
  ButtonProjects,
} from "./styles";

export function Projects() {
  return (
    <ProjectsContainer>
      <Profile />

      <CurrentProjects>
        <h1>Projetos Atuais:</h1>
        <BoxProjects>
          <h2>Timer React</h2>
          <ButtonProjects>
            <a href="">Ir</a>
          </ButtonProjects>
        </BoxProjects>
        <BoxProjects>
          <h2>ToDo React</h2>
          <ButtonProjects>
            <a href="">Ir</a>
          </ButtonProjects>
        </BoxProjects>
        <BoxProjects>
          <h2>Feed React</h2>
          <ButtonProjects>
            <a href="">Ir</a>
          </ButtonProjects>
        </BoxProjects>
      </CurrentProjects>

      <AcademicsProjects>
        <h1>Projetos Acadêmicos:</h1>
        <BoxProjects>
          <h2>Projeto PHP</h2>
          <ButtonProjects>
            <a href="">Ir</a>
          </ButtonProjects>
        </BoxProjects>
        <BoxProjects>
          <h2>Portfólio HTML</h2>
          <ButtonProjects>
            <a href="">Ir</a>
          </ButtonProjects>
        </BoxProjects>
        <BoxProjects>
          <h2>Primeira API C#</h2>
          <ButtonProjects>
            <a href="">Ir</a>
          </ButtonProjects>
        </BoxProjects>
      </AcademicsProjects>
    </ProjectsContainer>
  );
}
