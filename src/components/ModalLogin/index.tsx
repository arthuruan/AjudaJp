import React, { useState } from 'react';
import './styles.scss';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/ducks/user/actions';

import { environment } from '../../environment/environment';

interface MyProps {
  show: boolean;
  onHide: any;
}

const ModalLogin = ({ show, onHide }: MyProps) => {

  const props = { show, onHide };
  const dispatch = useDispatch();

  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signIn = () => {

    const user = {
      id: '123456',
      token: 'token_valido',
      email: userName,
      name: userName
    }

    localStorage.setItem(environment.REACT_APP_LOCAL_STORAGE_USER, 'token_valido');
    localStorage.setItem("userLogin", JSON.stringify({ user }));
    dispatch(updateUser({ user }));

    props.onHide();
  }

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h4>
          Entrar no AjudaJP
        </h4>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              value={userName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={signIn}
          className="primary-button"
        >
          Entrar
        </Button>
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

export default ModalLogin;