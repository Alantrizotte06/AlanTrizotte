import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import {
  House,
  Code,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  WhatsappLogo,
} from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Home">
          <House size={32} />
        </NavLink>
        <NavLink to="/projects" title="Projects">
          <Code size={32} />
        </NavLink>
      </nav>

      <nav>
        <a
          href="https://www.linkedin.com/in/alan-trizotte-32b468237/"
          title="Linkedin"
        >
          <LinkedinLogo size={32} />
        </a>
        <a href="https://github.com/Alantrizotte06" title="GitHub">
          <GithubLogo size={32} />
        </a>
        <a href="https://www.instagram.com/trizotte_alan/" title="Instagram">
          <InstagramLogo size={32} />
        </a>
        <a href="https://wa.me/5541996141352">
          <WhatsappLogo size={32} />
        </a>
      </nav>
    </HeaderContainer>
  );
}
