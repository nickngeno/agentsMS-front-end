import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export const AddDeptModal = ({show, onHide,alertOption}) => {
//   console.log(show)
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Form onSubmit={alertOption} >
          <ModalHeader closeButton>
            <ModalTitle>Add department</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Form.Group controlId="deptInput">
              <Form.Control type="text" name= "departmentName" placeholder="Enter department name" />
            </Form.Group>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onHide}>Close</Button>
            <Button type="submit" >Submit</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
}

