import React from 'react';
import './styles.scss';

import codingImage from '../../images/coding.svg';
import { GitHub, LinkedIn, Email } from '@material-ui/icons';

const AboutMe: React.FC = () => {
  return (
    <div className="container-aboutMe">

      <div className="left">
        <img
          src="https://projecthope1.s3.amazonaws.com/d811684694eb663f60942b343ef46a73-me.jpg"
          alt="pict-me"
        />
        <div className="container-info" >
          <h4>Arthur Ruan</h4>
          <p>
            Graduando em Engenharia de Computação - UFPB
            <br />
            Desenvolvedor Web e Mobile
          </p>
          <div className="container-redes" >
            <a
              href="https://www.linkedin.com/in/arthur-ruan-297431193/"
              target="_blank"
            >
              <LinkedIn />
            </a>
            <a
              href="https://github.com/arthuruan"
              target="_blank"
            >
              <GitHub className="git" />
            </a>
            <a
              href="mailto:arthur.ruan@lavid.ufpb.br"
              target="_blank"
            >
              <Email />
            </a>
          </div>
        </div>
      </div>

      <div className="right">
        <img src={codingImage} alt="coding-img" />
      </div>

    </div>
  );
}

export default AboutMe;