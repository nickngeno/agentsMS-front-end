import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {AddAgentModal} from './AddAgentModal'
import {DeleteAgentModal} from './DeleteAgentModal'
import {EditAgentModal} from './EditAgentModal'
import {useState, useEffect } from 'react'

const Agent = () => {
  // const agents = [
  //   {
  //     id: 1,
  //     firstname: "Nick",
  //     lastname: "Ngeno",
  //     doj: "01/2/2020",
  //     department: "IT",
  //   },
  //   {
  //     id: 2,
  //     firstname: "vik",
  //     lastname: "Ngeno",
  //     doj: "01/2/2020",
  //     department: "Finance",
  //   },
  //   {
  //     id: 3,
  //     firstname: "Pat",
  //     lastname: "bobo",
  //     doj: "01/3/2020",
  //     department: "HR",
  //   },
  // ];

  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState({show:false, firstname:"",lastname:"",doj:"",department:""})
  const [deleteModal, setDeleteModal] = useState({show:false, id:""})

  const [agents , setAgents] =  useState([])

  useEffect(()=>{
    fetch('/agent')
    .then(response => response.json())
    .then(data => {
      setAgents(data)
      console.log(data)
    })

  },[agents])
  const handleUpdate = () =>{
      console.log("update clicked!")
  }
  return (
    <div className="container">
    <Button
        variant="primary"
        onClick={() => setAddModal(true)}
        className="mb-2"
      >Add agent</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DoJ</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent, index) => (
            <tr key={index}>
              <td>{agent.id}</td>
              <td>{agent.firstname}</td>
              <td>{agent.lastname}</td>
              <td>{agent.doj}</td>
              <td>{agent.department}</td>
              <td>
                {" "}
                <Button variant="primary" className="mr-2" onClick={() => setEditModal({show:true,id:agent.id,firstname: agent.firstname,lastname: agent.lastname,doj: agent.doj,department: agent.department})} >
                  Edit
                </Button>{" "}
                <Button variant="danger" onClick={() => setDeleteModal({show: true, id: agent.id}) }>Delete</Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddAgentModal show={addModal} onHide={ () => setAddModal(false)} />
      <EditAgentModal show={editModal.show} onHide={ () => setEditModal({show:false})}  emp={editModal} handleUpdate={handleUpdate} />
      <DeleteAgentModal show={deleteModal.show} item ={deleteModal.id} onHide={ () => setDeleteModal({show:false})} />
    </div>
  );
};

export default Agent;
