import React from "react";
import { useState, useEffect } from "react";
import { Table, Button, Row } from "react-bootstrap";
import { AdddeptModal } from "./AdddeptModal";
import { DeletedeptModal } from "./DeletedeptModal";
import { EditDepartmentModal } from "./EditDepartmentModal";
import Spinner from "react-bootstrap/Spinner";

const Department = () => {
  const [deps, setDeps] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState({ show: false, deptId: "" });
  const [editModal, setEditModal] = useState({
    show: false,
    deptId: "",
    name: "",
  });

  useEffect(() => {
    let mounted = true
      fetch(`/department`)
      .then((response) => response.json())
      .then((data) => {
        if(mounted){
          setDeps(data);
        }
      })

      return () =>{
        mounted =false
      }
  })

 
  // const [dept,deptId, name] = deps;
  return (
    <div className="container">
      <Button
            variant="primary"
            onClick={() => setshowModal(true)}
            className="mb-2 mt-2"
          >
            Add department
          </Button>
      {deps.length === 0 ? (
        <Row
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            paddingTop:"1rem"
          }}
        >
          {" "}
          <Spinner animation="border" variant="primary" />{" "}
        </Row>
      ) : (
        <>
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
        </>
      )}
      <AdddeptModal show={showModal} onHide={() => setshowModal(false)} />
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
