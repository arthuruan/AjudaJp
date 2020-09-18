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

import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { removeUser } from '../../store/ducks/user/actions';

interface User {
  id: string;
  token: string;
  name: string;
  email: string;
  password: string;
}

const Navbar: React.FC = () => {

  const user: User = useSelector((state: RootStateOrAny) => state.user.user);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  const signOut = () => {
    dispatch(removeUser());
  }

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
              <h3>juda<span>JP</span></h3>
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
                onClick={() => { user.name === '' ? setModalShow(true) : signOut() }}
              >
                <Person style={{ marginRight: 10 }} />
                {user.token !== '' ?
                  user.name
                  :
                  "Entrar"
                }
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