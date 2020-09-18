/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.scss';

import waveFooter from '../../images/waveFooter.svg';

const Footer: React.FC = () => {

  const goToPage = (page: string) => {
    document.querySelector(page)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="container-footerPage">
      <div className="wave">
        <img src={waveFooter} alt="wave" />

        <div className="container-fastLinks" >
          <h4>
            Links rápidos
          </h4>
          <div className="links" >
            <a
              onClick={() => goToPage('#navBar')}
            >
              Início
            </a>
            <a
              onClick={() => goToPage('.container-pagemap')}
            >
              Mapa
            </a>
          </div>
        </div>

        AjudaJP ©2020 Created by Arthur Ruan
      </div>
    </div>
  );
}

export default Footer;