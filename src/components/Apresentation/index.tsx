import React from 'react';

import './styles.scss';

import locationSender from '../../images/locationSender.svg';

const Apresentation: React.FC = () => {
  return (
    <div className="wrapper-apresentation" >
      <div className="container-left">
        <img src={locationSender} alt="" />
      </div>
      <div className="container-right" >
        <div className="info" >
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam saepe commodi fuga.
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error consequuntur officiis ipsa a odio, in voluptate eligendi, enim molestiae quibusdam consectetur aspernatur! Quis magnam beatae ea delectus enim dolorem facilis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Apresentation;