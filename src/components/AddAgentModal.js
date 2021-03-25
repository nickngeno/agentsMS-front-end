import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Row, Col}  from  'react-bootstrap'

export const AddAgentModal = ({ show, onHide }) => {
  const [deps, setDeps] = useState([]);

  useEffect(() => {
    fetch("/department")
      .then((response) => response.json())
      .then((data) => {
        setDeps(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      dateofjoining: new Date().toLocaleDateString("en-GB", {
        timeZone: "EAT",
      }),
      department: e.target.departmentname.value,
    });
    console.log(body);
    try {
      fetch("/agent", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: e.target.firstname.value,
          lastname: e.target.lastname.value,
          dateofjoining: new Date().toLocaleDateString(),
          department: e.target.departmentname.value,
        }),
      });
    } catch (error) {
      console.log(error);
    }
    onHide();
  };
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Form onSubmit={handleSubmit}>
          <ModalHeader closeButton>
            <ModalTitle>Add Employee</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col className="col">
                <Form.Group controlId="firstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstname"
                    placeholder="Enter first name"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="lastname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastname"
                    placeholder="Enter last name"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="deptInput">
                  <Form.Label>Select department</Form.Label>
                  <Form.Control
                    as="select"
                    name="departmentname"
                    size="sm"
                    custom
                  >
                    {deps.map((department) => (
                      <option key={department.deptid}>{department.name}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col className="col">
                <Form.Group>
                  <Form.Control type="file" style={{width:"150px", height:"150px", background:"#dcdcde"}} >
                      
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
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
