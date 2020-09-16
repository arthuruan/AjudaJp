import React, { useState } from 'react';
import Person from '@material-ui/icons/Person';
import './styles.scss';
//bootstrap
import Nav from 'react-bootstrap/Nav';
import Menu from 'react-bootstrap/Navbar';
//images
import Logo from '../../images/logo.png';
//component
import ModalLogin from '../ModalLogin';

const Navbar: React.FC = () => {

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Menu >
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
              <Nav.Link eventKey="link-1">Sobre</Nav.Link>
            </Nav.Item>
          </div>
          <div className="container-nav right" >
            <Nav.Item >
              <Nav.Link
                onClick={() => setModalShow(true)}
              >
                <Person style={{ marginRight: 10 }} />
                Entrar
              </Nav.Link>
            </Nav.Item>
          </div>
        </Nav>
      </Menu>
      <ModalLogin
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Navbar;