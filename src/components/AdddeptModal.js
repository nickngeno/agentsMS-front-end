import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const AdddeptModal = ({ show, onHide }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestdata = {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.departmentname.value,
      })
    }
    fetch('/department', requestdata)
    .then((response) => response.json())
    .then((result) => {
        console.log(result);
      })
    .catch((error) => {
        console.log(error);
      });
    onHide()
  };
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Form onSubmit={handleSubmit} >
          <ModalHeader closeButton>
            <ModalTitle>Add department</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Form.Group controlId="deptInput">
              <Form.Control type="text" name= "departmentname" placeholder="Enter department name" required />
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
};
