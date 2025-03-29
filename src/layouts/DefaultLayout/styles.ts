import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 90rem;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      color: ${(props) => props.theme["blue-200"]};

      &:hover {
        color: ${(props) => props.theme["blue-400"]};
      }

      &:active {
        color: ${(props) => props.theme["blue-400"]};
      }
    }
  }
`;
