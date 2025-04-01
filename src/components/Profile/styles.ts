import styled from "styled-components";

export const ProfileContainer = styled.aside`
  position: fixed;
  left: 3.6rem;
  width: 18rem;
  height: 20rem;
  background: ${(props) => props.theme["black"]};
  border-radius: 0.8rem;

  overflow: hidden;
`;

export const ProfileCover = styled.div`
  width: 100%;
  height: 30%;
  background: ${(props) => props.theme["blue-400"]};

  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: -3.5rem;

  font-family: "Roboto";
  font-size: 1.2rem;

  strong {
    margin: 1rem;
  }

  span {
    line-height: 1.8rem;
  }
`;

export const ProfilePhoto = styled.img`
  width: 120px;
  height: auto;

  border-radius: 120px;
`;
