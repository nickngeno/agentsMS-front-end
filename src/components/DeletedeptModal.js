import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { ModalFooter } from 'react-bootstrap'
import { Button } from 'bootstrap'

export const DeletedeptModal = ({show, onHide}) => {
    return (
        <>
            <Modal>
                <Form>
                    <Modal.Body>
                        <p>Are you sure you want to delete the department?</p>
                    </Modal.Body>
                    <ModalFooter>
                        <Button>Cancel</Button>
                        <Button>Delete</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    )
}
