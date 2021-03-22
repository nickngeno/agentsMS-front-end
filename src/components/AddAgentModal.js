import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const AddAgentModal = ({ show, onHide }) => {

  const [deps, setDeps] =  useState([])

  useEffect(()=>{
    fetch('/department')
    .then(response => response.json())
    .then(data => {
      setDeps(data)
      console.log(data)
    })

  },[deps])

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(e.target)
    var body = JSON.stringify({
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      doj: e.target.doj.value,
      department: e.target.departmentname.value,
    })
    console.log(body)
    // try{
    //   fetch('/employee',{
    //     method: "POST",
    //     headers: { 
    //       "Accept": "application/json",
    //       "Content-Type": "application/json"
    //     },
    //     body:JSON.stringify({
    //       firstname: e.target.firstname.value,
    //       lastname: e.target.lastname.value,
    //       doj: e.target.doj.value,
    //       department: e.target.department.value,
    //     })
        
    //   })
    // }
    // catch(error){
    //   console.log(error)
      
    // }
    onHide()
}
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Form onSubmit={handleSubmit}>
          <ModalHeader closeButton>
            <ModalTitle>Add Employee</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Form.Group controlId="firstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="firstname" placeholder="Enter first name" required />
            </Form.Group>
            <Form.Group controlId="lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lastname" placeholder="Enter last name" required />
            </Form.Group>
            <Form.Group controlId="doj">
              <Form.Label>DOJ</Form.Label>
              <Form.Control type="date" name="doj" placeholder="DD/MM/YYYY" />
            </Form.Group>
            <Form.Group controlId="deptInput">
              <Form.Label>Select department</Form.Label>
              <Form.Control as="select" name="departmentname" size="sm" custom>
                {deps.map(department =>(
                  <option key={department.deptid}>{department.departmentname}</option>
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
