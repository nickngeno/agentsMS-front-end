import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const Department = () => {
  const [deps, setDeps] = useState([]);
  console.log(deps);
  const getDepartments = () => {
    // const url = "https://localhost:44320/api/"
    fetch(`/department`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDeps(data);
      });
  };

  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <div className="container">
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
                <td>Edit / Delete</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Department;
