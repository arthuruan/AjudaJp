import React, { useState } from 'react';

import './styles.scss';
//bootstrap
import Nav from 'react-bootstrap/Nav';
//images
import Logo from '../../images/logo.png';

import ModalLogin from '../ModalLogin';

const Navbar: React.FC = () => {

  const [modalShow, setModalShow] = useState(true);

  return (
    <>
      <Nav
        activeKey="/"
      // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="container-nav left" >
          <div className="container-logo" >
            <img src={Logo} alt="logo-AutonoDev" />
            <h3>utono<span>Dev</span></h3>
          </div>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
        </div>
        <div className="container-nav right" >
          <Nav.Item>
            <Nav.Link
              onClick={() => setModalShow(true)}
            >
              Entrar
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
      <ModalLogin
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Navbar;