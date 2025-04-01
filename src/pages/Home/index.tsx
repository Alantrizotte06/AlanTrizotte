import { HomeContainer, InfoSobreMim, PersonalPresentation } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <PersonalPresentation>
        <p>Olá,</p>
        <p>Eu sou Alan,</p>
        <p>Desenvolvedor Front-end.</p>
      </PersonalPresentation>
      <InfoSobreMim>
        <p>
          Estou cursando análise e desenvolvimento de sistemas pela Universidade
          Positivo, apaixonado por tecnologia e sempre em busca de expandir meu
          conhecimento, tenho habilidades técnicas em: HTML, CSS, Javascript,
          React.js e styled components.
        </p>
        <p>
          Também possuo conhecimento academico nas seguintes linguagens de
          programação: C#, Java e MySql.
        </p>
        <p>
          Em relação a soft skills tenho uma otíma comunicação, gosto trabalhar
          em equipe, gerencio bem meu tempo entre tarefas e sou proativo.
        </p>
      </InfoSobreMim>
    </HomeContainer>
  );
}
