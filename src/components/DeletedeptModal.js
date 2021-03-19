import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import { ModalBody, ModalFooter } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

export const DeletedeptModal = ({ show, onHide, handleSubmit }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Form>
        <ModalBody>
          <p>Are you sure you want to delete the department?</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onHide}>Cancel</Button>
          <Button onClick={handleSubmit}>Delete</Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};
