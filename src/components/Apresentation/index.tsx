import React from 'react';

import './styles.scss';

import { ArrowForward } from '@material-ui/icons';

import illustration from '../../images/illustration.jpg';


const Apresentation: React.FC = () => {

  const scrollToNextPage = () => window.scrollTo(0, 1000);

  return (
    <div className="wrapper-apresentation" >
      <div className="container-right" >
        <div className="info" >
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam saepe commodi fuga.
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error consequuntur officiis ipsa a odio, in voluptate eligendi, enim molestiae quibusdam consectetur aspernatur! Quis magnam beatae ea delectus enim dolorem facilis.
          </p>

          <button className="button-start" onClick={scrollToNextPage} >
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