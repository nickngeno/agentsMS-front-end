import React from 'react'
import Modal from 'react-bootstrap/Modal';
import {  Button, ModalFooter } from 'react-bootstrap'

export const DeleteAgentModal = ({show, onHide, agent}) => {

    const handleDelete =(id) =>{
        try{
            fetch('/agent/'+id,{
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
            })
        }catch(error){
            alert(error)
        }
        onHide()

    }
    return (
        <>
            <Modal show={show} onHide={onHide}>
                
                    <Modal.Body>
                        <p>Are you sure you want to delete employee with id: <strong>{agent.id}</strong> ?</p>
                    </Modal.Body>
                    <ModalFooter>
                        <Button onClick={onHide}>Cancel</Button>
                        <Button onClick={()=>handleDelete(agent.id)}>Delete</Button>
                    </ModalFooter>
                
            </Modal>
        </>
    )
}
