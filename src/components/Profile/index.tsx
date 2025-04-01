import {
  ProfileContainer,
  ProfileCover,
  ProfileInfo,
  ProfilePhoto,
} from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileCover />
      <ProfileInfo>
        <ProfilePhoto
          src="https://github.com/Alantrizotte06.png"
          alt="Profile Image"
        />
        <strong>Alan Trizotte</strong>

        <span>Desenvolvedor Front End</span>
        <span>41 9 9614-1352</span>
      </ProfileInfo>
    </ProfileContainer>
  );
}
