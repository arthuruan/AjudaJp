import React, { useState } from 'react';
import './styles.scss';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useSelector, RootStateOrAny } from 'react-redux';

import noLogged from '../../images/noLogged.svg';

interface MyProps {
  show: boolean;
  onHide(): any;
  neighborhood: string;
  openLogin(): any;
  sendMessage: any;
}

interface User {
  id: string;
  token: string;
  name: string;
  email: string;
  password: string;
}

const ModalSendMessage = ({ show, onHide, neighborhood, openLogin, sendMessage }: MyProps) => {

  const props = { show, onHide };
  const user: User = useSelector((state: RootStateOrAny) => state.user.user);

  const [message, setMessage] = useState<string>('');

  const submitMessage = () => {
    if (message !== '') {
      props.onHide();
      sendMessage(message);
      setMessage('');
    }
  }

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {user.token !== '' ?
        <>
          {/* modal se o usuario estiver logado */}
          <Modal.Header closeButton>
            <h5>
              Comente sobre o bairro <span>{neighborhood}</span>
            </h5>
          </Modal.Header>
          <Modal.Body>
            <Form >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite aqui sobre o bairro"
                  as="textarea"
                  rows={3}
                  value={message}
                  onChange={(event: any) => setMessage(event.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={submitMessage}
              className="primary-button"
            >
              Enviar
            </Button>
            <Button
              onClick={props.onHide}
              className="secondary-button"
              variant="outline-light"
            >
              Fechar
            </Button>
          </Modal.Footer>
        </>
        :
        <div className="container-noLogged" >
          {/* modal se o usuário não estiver logado */}
          <Modal.Header closeButton />
          <div className="content-img" >
            <img src={noLogged} alt="noLoggedUser" />
            <h4>
              Ops...
            </h4>
            <p>
              Para comentar é necessário que você esteja autenticado
            </p>
          </div>
          <Modal.Footer>
            <Button
              onClick={openLogin}
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
        </div>
      }
    </Modal>
  );
}

export default ModalSendMessage;