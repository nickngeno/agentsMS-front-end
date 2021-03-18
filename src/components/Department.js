import React from "react";
import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { AdddeptModal } from "./AdddeptModal";
import { DeletedeptModal } from "./DeletedeptModal";

const Department = () => {
  const data = [
    {
      deptId: 1,
      name: "IT",
    },
    {
      deptId: 2,
      name: "Finance",
    },
    {
      deptId: 3,
      name: "HR",
    },
    {
      deptId: 4,
      name: "Semantex",
    },
  ];

  //   const getDepartments = () => {
  //     // "proxy": "https://localhost:44320/api",
  //   // const url = "https://localhost:44320/api/"
  //   // fetch(`/department`)
  //   // fetch(data)
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //     setDeps(data);
  //   //   });
  //   setDeps(data)
  // };

  // const [deps, setDeps] = useState(data);

  // useEffect(() => {
  //   getDepartments();
  // },[deps]);

  const alertOption = (e) => {
    e.preventDefault();
    console.log(e.target.departmentName.value);
    setshowModal(false);
  };
  const [showModal, setshowModal] = useState(false);
  return (
    <div className="container">
      <Button
        variant="primary"
        onClick={() => setshowModal(true)}
        className="mb-2"
      >
        Add department
      </Button>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.deptId}</td>
                <td>{element.name}</td>
                <td>
                  <Button variant="primary">Edit</Button>
                  <Button variant="danger" onClick={() => setshowModal(true)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AdddeptModal
        show={showModal}
        onHide={() => setshowModal(false)}
        alertOption={(e) => alertOption(e)}
      />
      <DeletedeptModal show={showModal} onHide={() => setshowModal(false)} />;
    </div>
  );
};

export default Department;
