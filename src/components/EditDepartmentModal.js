import React from 'react'
import { Button ,Modal ,ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'

export const EditDepartmentModal = ({show, onHide, item}) => {
    return (
        <>
            <Modal show={show} onHide={onHide}>
                <ModalHeader closeButton>
                    <ModalTitle>
                        Edit Department
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <p>this is my editing body</p>
                </ModalBody>
                <ModalFooter>
                    <Button>Cancel</Button>
                    <Button>Submit</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
