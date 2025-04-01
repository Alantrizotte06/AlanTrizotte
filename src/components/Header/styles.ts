import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme["black"]};

  padding: 1.4rem 3.6rem;
  nav {
    display: flex;
    gap: 2rem;

    color: ${(props) => props.theme["blue-200"]};

    a {
      display: flex;

      color: ${(props) => props.theme["blue-200"]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        color: ${(props) => props.theme["blue-400"]};
        transition: all 0.5s;
        border-bottom: 3px solid ${(props) => props.theme["blue-400"]};
      }

      &.active {
        color: ${(props) => props.theme["blue-400"]};
        border-bottom: 3px solid ${(props) => props.theme["blue-400"]};
      }
    }
  }
`;
