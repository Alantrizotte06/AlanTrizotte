import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 62.5rem;
  height: 43.75rem;

  font-family: "Roboto Mono";
  color: ${(props) => props.theme["white"]};
`;

export const PersonalPresentation = styled.div`
  color: ${(props) => props.theme["blue-200"]};
  line-height: 3.5rem;
  font-weight: bold;
  font-size: 2.4rem;

  p:nth-child(2) {
    color: ${(props) => props.theme["white"]};
  }
`;

export const InfoSobreMim = styled.div``;
