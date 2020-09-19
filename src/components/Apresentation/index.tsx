import React from 'react';

import './styles.scss';

import { ArrowForward } from '@material-ui/icons';

import illustration from '../../images/illustration.jpg';


const Apresentation: React.FC = () => {

  const scrollToNextPage = () => document.querySelector('.container-pagemap')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="wrapper-apresentation" >
      <div className="container-right" >
        <div className="info" >
          <h3>
            Faça o papel de cidadão de uma maneira diferente aqui no AjudaJP.
          </h3>
          <p>
            De um jeito fácil e rápido você poderá ajudar a melhorar os bairros de João Pessoa, ajude sua cidade agora
            escolhendo uma zona e bairro, comentando o que precisa para melhora-lo.
          </p>

          <button className="primary-button" onClick={scrollToNextPage} >
            Quero ajudar
            <ArrowForward />
          </button>
        </div>

      </div>
      <div className="container-left">
        <img src={illustration} alt="" />
      </div>
    </div>
  );
}

export default Apresentation;