import React,{useState,useEffect} from "react";

import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const EditAgentModal = ({ show, onHide, agent }) => {

  const [deps, setDeps] =  useState([])

  useEffect(()=>{
    fetch('/department')
    .then(response => response.json())
    .then(data => {
      setDeps(data)
      
    })

  },[])

  const handleUpdate = (e) =>{
    e.preventDefault()
    try{
      fetch('/agent',{
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          agentid:agent.id,
          firstname: e.target.firstname.value,
          lastname: e.target.lastname.value,
          dateofjoining: agent.doj,
          department: e.target.departmentname.value,
        })
      })
      
    }catch(error){
      alert(error)
    }
    onHide()
  }
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Form onSubmit={handleUpdate}>
          <ModalHeader closeButton>
            <ModalTitle>Edit Employee</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Form.Group controlId="employeeId">
              <Form.Label>Employee Id</Form.Label>
              <Form.Control
                type="number"
                name="id"
                defaultValue={agent.id}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="firstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                defaultValue={agent.firstname}
                required
              />
            </Form.Group>
            <Form.Group controlId="lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                defaultValue={agent.lastname}
                required
              />
            </Form.Group>
            <Form.Group controlId="doj">
              <Form.Label>DOJ</Form.Label>
              <Form.Control type="text" defaultValue={agent.doj} disabled />
            </Form.Group>
            <Form.Group controlId="deptInput">
              <Form.Label>Select department</Form.Label>
              <Form.Control as="select" name= "departmentname" size="sm" custom>
                {deps.map(department =>(
                  <option key={department.deptid}>{department.name}</option>
                ))}
  
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
