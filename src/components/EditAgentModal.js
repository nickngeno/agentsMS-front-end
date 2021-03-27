import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'

const EditAgentModal = ({ show, onHide, agentdetail }) => {

  const [deps, setDeps] = useState([]);
  const [imgsrc , setImgsrc] = useState(agentdetail.picture)
  const [isloading , setIsloading] = useState(true)
  

  useEffect( () =>{
    if(imgsrc !=null){
      setIsloading(false)
    }
  },[imgsrc])
  useEffect(() => {
    fetch("/department")
      .then((response) => response.json())
      .then((data) => {
        setDeps(data);
      });
  }, []);
  
  const handlefileUpdate = (event) =>{
    event.preventDefault()
    console.log(event.target.files[0].name)
    // const uploadedfile = event.
    const formdata =  new FormData()
    formdata.append("myFile",event.target.files[0],event.target.files[0].name)
    // console.log(formdata)
    fetch("/agent/saveprofile",{
      method: "POST",
      body:formdata

    })
    .then(response => response.json())
    .then((result) =>{
      setImgsrc( process.env.REACT_APP_PHOTOSPATHURL + result)
      
    })
    .catch(error =>{
      console.log(error)
    }) 
};

  const handleUpdate = (e) => {
    e.preventDefault();
    try {
      fetch("/Agent", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agentid: agentdetail.id,
          firstname: e.target.firstname.value,
          lastname: e.target.lastname.value,
          dateofjoining: agentdetail.doj,
          department: e.target.departmentname.value,
          picture: imgsrc
        }),
      });
    } catch (error) {
      alert(error);
    }
    onHide();
  };
// console.log(agentdetail)
  return (
    <>
      <Modal show={show} onHide={onHide} size="lg">
        <Form onSubmit={handleUpdate}>
          <ModalHeader closeButton>
            <ModalTitle>Edit Employee</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col lg={8}>
                <Form.Group controlId="employeeId">
                  <Form.Label>Employee Id</Form.Label>
                  <Form.Control
                    type="number"
                    name="id"
                    defaultValue={agentdetail.id }
                    disabled
                  />
                </Form.Group>
                <Form.Group controlId="firstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstname"
                    defaultValue={agentdetail.firstname}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="lastname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastname"
                    defaultValue={agentdetail.lastname}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="doj">
                  <Form.Label>DOJ</Form.Label>
                  <Form.Control type="text" defaultValue={agentdetail.doj} disabled />
                </Form.Group>
                <Form.Group controlId="deptInput">
                  <Form.Label>Select department</Form.Label>
                  <Form.Control
                    as="select"
                    name="departmentname"
                    size="sm"
                    custom
                    defaultValue={agentdetail.department}
                  >
                    {deps.map((department) => (
                      <option key={department.deptId}>{department.name}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group controlId="imageInput">
                  {isloading ? <Spinner /> : (<img
                    id="imageCanvas"
                    src={agentdetail.picture == null ? process.env.REACT_APP_PHOTOSPATHURL +"anonymous.png": agentdetail.picture}
                    alt="profilephoto"
                    style={{ width: "200px", height: "200px", borderRadius:"50%", marginBottom: "1rem" }}
                  />)}
                  <Form.Group>
                    <Form.Control
                      type="file"
                      name="profilephoto"
                      onChange={handlefileUpdate}
                    ></Form.Control>
                  </Form.Group>
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
export default EditAgentModal;
