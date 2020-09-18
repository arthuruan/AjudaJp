import React from 'react';
import './styles.scss';

import { useSelector, RootStateOrAny } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import noUser from '../../images/noUser.png';

interface MyProps {
  show: boolean;
  onHide: any;
  message: string;
}

interface User {
  id: string;
  token: string;
  name: string;
  email: string;
  password: string;
}

const ModalSuccess = ({ show, onHide, message }: MyProps) => {

  const props = { show, onHide };
  const user: User = useSelector((state: RootStateOrAny) => state.user.user);

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h5>
          Obrigado por participar do <strong>AjudaJP</strong>
        </h5>
      </Modal.Header>
      <Modal.Body>
        <div className="data-user" >
          <img src={noUser} alt="avatar" />
          <h5> {user.name} </h5>
        </div>
        <p>
          {message}
        </p>
      </Modal.Body>
      <Modal.Footer className="footer-modalSuccess" >
        <Button
          onClick={props.onHide}
          className="secondary-button"
          variant="outline-light"
        >
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSuccess;