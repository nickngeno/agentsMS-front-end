import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const EditAgentModal = ({ show, onHide, handleSubmit, emp }) => {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Form onSubmit={handleSubmit}>
          <ModalHeader closeButton>
            <ModalTitle>Edit Employee</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Form.Group controlId="employeeId">
              <Form.Label>Employee Id</Form.Label>
              <Form.Control
                type="number"
                name="id"
                defaultValue={emp.id}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="firstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                defaultValue={emp.firstname}
                required
              />
            </Form.Group>
            <Form.Group controlId="lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                defaultValue={emp.lastname}
                required
              />
            </Form.Group>
            <Form.Group controlId="doj">
              <Form.Label>DOJ</Form.Label>
              <Form.Control type="text" defaultValue={emp.doj} disabled />
            </Form.Group>
            <Form.Group controlId="deptInput">
              <Form.Label>Select department</Form.Label>
              <Form.Control as="select" size="sm" custom>
                <option>IT</option>
                <option>Finance</option>
                <option>HR</option>
              </Form.Control>
            </Form.Group>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onHide}>Close</Button>
            <Button type="submit">Submit</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};
