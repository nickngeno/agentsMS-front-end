import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const EditDepartmentModal = ({ show, onHide,item }) => {

  const handleEdit = (e) =>{
    e.preventDefault()

    try{
      fetch('/department',{
        method:"PUT",
        headers:{
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          deptid: e.target.deptid.value,
          name:e.target.departmentname.value
        })
      })
    }
    catch(error){
      alert(error)
    }
    onHide()
  }
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Form onSubmit={handleEdit} >
          <ModalHeader closeButton>
            <ModalTitle>Edit department</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Form.Group controlId="deptId">
              <Form.Control type="text" name= "deptid" defaultValue={item.deptId} disabled />
            </Form.Group>
            <Form.Group controlId="deptInput">
              <Form.Control type="text" name= "departmentname" defaultValue={item.name} />
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
