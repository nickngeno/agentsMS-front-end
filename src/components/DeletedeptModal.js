import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ModalFooter } from "react-bootstrap";

export const DeletedeptModal = ({ show, onHide, item }) => {
  
    const handleDelete = (item) => {
        try{
            fetch('/department/'+ item,{
            method: "Delete",
            header:{
                "Accept":"application/json",
                "Content-Type": "application/json"
            }
        })}
        catch(error){
            alert(error)
        }
        onHide()
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Body>
          <p>
            Are you sure you want to delete department with id:{" "}
            <strong>{item}</strong> ?
          </p>
        </Modal.Body>
        <ModalFooter>
          <Button onClick={onHide}>Cancel</Button>
          <Button onClick={ ()=> handleDelete(item)}>Delete</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
