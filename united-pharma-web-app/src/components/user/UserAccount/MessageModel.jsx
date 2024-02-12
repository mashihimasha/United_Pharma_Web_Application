import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function MessageModal(props) {
    const {showSuccessModal, showUnsuccessModal, message, handleClose} = props;

    return (
    <div className='success'>
    <Modal show={showSuccessModal} onHide={handleClose} centered size="sm">
      <Modal.Body className="text-center">
        <i className="fa fa-check-circle text-success fa-3x"></i>
        <p className="text-success py-2">{message} Successfully!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" className="rounded-pill text-white" onClick={handleClose}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>

    <Modal show={showUnsuccessModal} onHide={handleClose} centered size="sm">
      <Modal.Body className="text-center">
        <i className=" text-danger fa-3x"></i>
        <p className="text-danger py-2">{message} Unsuccessfull!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" className="rounded-pill text-white" onClick={handleClose}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
    );
}

export default MessageModal;