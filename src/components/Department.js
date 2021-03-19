import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import {Button} from 'react-bootstrap'
import {AddDeptModal} from "./AddDeptModal";

const Department = () => {
  const [deps, setDeps] = useState([]);
  const [showModal, setshowModal] = useState(false)

  const alertOption = (e) => {
    e.preventDefault();
    console.log(e.target.departmentName.value);
    setshowModal(false);
  };
  const getDepartments = () => {
    // const url = "https://localhost:44320/api/"
    fetch(`/department`)
      .then((response) => response.json())
      .then((data) => {
        setDeps(data);
      });
  };


  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <div className="container">
        <Button
        variant="primary"
        onClick={() => setshowModal(true)}
        className="mb-2"
      >Add department</Button>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {deps.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.deptId}</td>
                <td>{data.name}</td>
                <td>
                  <Button>Edit </Button> <Button variant="danger">Delete</Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AddDeptModal show={showModal} onHide={() => setshowModal(false)} alertOption={alertOption} />
    </div>
  );
};

export default Department;
