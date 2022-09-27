import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {
  FooterContainer,
  SocialMedias,
  Link,
  Text,
  Copyright,
} from "./FooterStyles";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedias>
        <Link
          href="https://www.linkedin.com/in/jesus-manuel-ascencio-perez-700373227/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text>Linked</Text>
          <FaLinkedinIn />
        </Link>
        <Link
          href="https://github.com/Manuel-Ascencio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <Text>GitHub</Text>
        </Link>
        <Link
          href="mailto:manuelascencioprz@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text>Email</Text>
          <MdEmail />
        </Link>
      </SocialMedias>
      <Copyright>
        Developed by Jesus Manuel
      </Copyright>
      <Copyright>with React.js</Copyright>
    </FooterContainer>
  );
};

export default Footer;
