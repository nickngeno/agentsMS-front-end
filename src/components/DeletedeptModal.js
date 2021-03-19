import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import {  Button, ModalFooter } from 'react-bootstrap'

export const DeletedeptModal = ({show, onHide, item}) => {
    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Form>
                    <Modal.Body>
                        <p>Are you sure you want to delete department with id: <strong>{item}</strong> ?</p>
                    </Modal.Body>
                    <ModalFooter>
                        <Button onClick={onHide}>Cancel</Button>
                        <Button>Delete</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    )
}
