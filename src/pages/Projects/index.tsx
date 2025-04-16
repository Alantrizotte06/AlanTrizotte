import { Profile } from "../../components/Profile";
import {
  BoxProjects,
  CurrentProjects,
  ProjectsContainer,
  ButtonProjects,
} from "./styles";

export function Projects() {
  return (
    <ProjectsContainer>
      <Profile />
      <h1>Projetos Atuais:</h1>
      <CurrentProjects>
        <BoxProjects>
          <h2>Timer React</h2>
          <p>
            Projeto com a funcionalidade de temporizador para gerenciamento de
            tarefas, com foco em aprimoramento de utilização de hooks, consumo
            de API e também aprimoramento em styled components.
          </p>
          <ButtonProjects>
            <a href="https://github.com/Alantrizotte06/igniteTimer">
              Ir ao repositório
            </a>
          </ButtonProjects>
        </BoxProjects>
        <BoxProjects>
          <h2>ToDo React</h2>
          <p>
            Projeto com a funcionalidade de definição de tarefas para o dia a
            dia, o projeto foi criado com o intuito de testar minhas habilidades
            na pratica envolvendo os fundamento do react, como componentização e
            hooks.
          </p>
          <ButtonProjects>
            <a href="https://github.com/Alantrizotte06/toDoList_desafio">
              Ir ao repositório
            </a>
          </ButtonProjects>
        </BoxProjects>
        <BoxProjects>
          <h2>Feed React</h2>
          <p>
            Projeto que funciona como um feed social, neste projeto iniciei
            minha jornada em React e tive o aprendizado de fundamentos de React,
            componentização, hooks e estado.
          </p>
          <ButtonProjects>
            <a href="https://github.com/Alantrizotte06/feedReact">
              Ir ao repositório
            </a>
          </ButtonProjects>
        </BoxProjects>
        <BoxProjects>
          <h2>Projeto PHP</h2>
          <p>
            Projeto com a funcionalidade de exibir sinopses e trailers de
            filmes, foi criado em PHP e MySql, o projeto foi em equipe onde eu
            cuidei da parte de estilização das páginas de login, cadastro, home
            e filme selecionado, e utilizei a função foreach para a navegação da
            página home para a página do filme selecionado.
          </p>
          <ButtonProjects>
            <a href="https://github.com/Diegotgagliardi/Projeto_PHP">
              Ir ao repositório
            </a>
          </ButtonProjects>
        </BoxProjects>
        <BoxProjects>
          <h2>Portfólio HTML</h2>
          <p>
            Este foi meu primeiro portfólio criado com HTML e CSS, e funciona
            como uma agência, criado apenas para teste de conhecimento.
          </p>
          <ButtonProjects>
            <a href="https://github.com/Alantrizotte06/Portfolio">
              Ir ao repositório
            </a>
          </ButtonProjects>
        </BoxProjects>
      </CurrentProjects>
    </ProjectsContainer>
  );
}
