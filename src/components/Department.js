import React from "react";
import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { AdddeptModal } from "./AdddeptModal";
import { DeletedeptModal } from "./DeletedeptModal";
import { EditDepartmentModal } from "./EditDepartmentModal";

const Department = () => {
  // const data = [
  //   {
  //     deptId: 1,
  //     name: "IT",
  //   },
  //   {
  //     deptId: 2,
  //     name: "Finance",
  //   },
  //   {
  //     deptId: 3,
  //     name: "HR",
  //   },
  //   {
  //     deptId: 4,
  //     name: "Semantex",
  //   },
  // ];

  const [deps, setDeps] = useState([]);
  const getDepartments = () => {
    // "proxy": "https://localhost:44320/api",
    // const url = "https://localhost:44320/api/"
    fetch(`/department`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDeps(data);
      });
    // setDeps(data)
  };

  useEffect(() => {
    getDepartments();
  }, [deps]);

  
  const [showModal, setshowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState({ show: false, deptId: "" });
  const [editModal, setEditModal] = useState({
    show: false,
    deptId: "",
    name: "",
  });
  // const [dept,deptId, name] = deps;
  return (
    <div className="container">
      <Button
        variant="primary"
        onClick={() => setshowModal(true)}
        className="mb-2"
      >
        Add department
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {deps.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.deptId}</td>
                <td>{element.name}</td>
                <td>
                  <Button
                    variant="primary"
                    className="mr-2"
                    onClick={() =>
                      setEditModal({
                        show: true,
                        deptId: element.deptId,
                        name: element.name,
                      })
                    }
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      setDeleteModal({ show: true, deptId: element.deptId })
                    }
                  >
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
      />
      <EditDepartmentModal
        show={editModal.show}
        onHide={() => setEditModal({ show: false })}
        item={editModal}
      />
      <DeletedeptModal
        show={deleteModal.show}
        onHide={() => setDeleteModal(false)}
        item={deleteModal.deptId}
      />
    </div>
  );
};

export default Department;
