import React from 'react';
import './styles.scss';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface MyProps {
  show: any;
  onHide: any;
}

const ModalLogin = ({ show, onHide }: MyProps) => {

  const props = { show, onHide };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Entrar na AutonoDev
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          className="primary-button"
        >
          Entrar
        </Button>
        <Button
          onClick={props.onHide}
          className="secondary-button"
        >
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalLogin;