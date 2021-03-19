import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import {  Button, ModalFooter } from 'react-bootstrap'

export const DeleteEmployeeModal = ({show, onHide, item, handleSubmit}) => {
    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Form>
                    <Modal.Body>
                        <p>Are you sure you want to delete employee with id: <strong>{item}</strong> ?</p>
                    </Modal.Body>
                    <ModalFooter>
                        <Button onClick={onHide}>Cancel</Button>
                        <Button onClick={handleSubmit}>Delete</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    )
}
