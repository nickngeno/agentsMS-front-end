import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {AddEmployeeModal} from './AddEmployeeModal'
import {DeleteEmployeeModal} from './DeleteEmployeeModal'
import {EditEmployeeModal} from './EditEmployeeModal'
import {useState } from 'react'

const Agent = () => {
  const employees = [
    {
      id: 1,
      firstname: "Nick",
      lastname: "Ngeno",
      doj: "01/2/2020",
      department: "IT",
    },
    {
      id: 2,
      firstname: "vik",
      lastname: "Ngeno",
      doj: "01/2/2020",
      department: "Finance",
    },
    {
      id: 3,
      firstname: "Pat",
      lastname: "bobo",
      doj: "01/3/2020",
      department: "HR",
    },
  ];

  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState({show:false, firstname:"",lastname:"",doj:"",department:""})
  const [deleteModal, setDeleteModal] = useState({show:false, id:""})

  const handleSubmit = () =>{
      console.log("handle clicked!")
  }

  const handleUpdate = () =>{
      console.log("update clicked!")
  }
  return (
    <div className="container">
    <Button
        variant="primary"
        onClick={() => setAddModal(true)}
        className="mb-2"
      >Add employee</Button>
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
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.doj}</td>
              <td>{employee.department}</td>
              <td>
                {" "}
                <Button variant="primary" className="mr-2" onClick={() => setEditModal({show:true,id:employee.id,firstname: employee.firstname,lastname: employee.lastname,doj: employee.doj,department: employee.department})} >
                  Edit
                </Button>{" "}
                <Button variant="danger" onClick={() => setDeleteModal({show: true, id: employee.id}) }>Delete</Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddEmployeeModal show={addModal} onHide={ () => setAddModal(false)} handleSubmit={handleSubmit} />
      <EditEmployeeModal show={editModal.show} onHide={ () => setEditModal({show:false})}  emp={editModal} handleUpdate={handleUpdate} />
      <DeleteEmployeeModal show={deleteModal.show} item ={deleteModal.id} onHide={ () => setDeleteModal({show:false})} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Agent;
