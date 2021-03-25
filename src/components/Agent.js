import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { AddAgentModal } from "./AddAgentModal";
import { DeleteAgentModal } from "./DeleteAgentModal";
import { EditAgentModal } from "./EditAgentModal";
import { useState, useEffect } from "react";

const Agent = () => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState({
    show: false,
    firstname: "",
    lastname: "",
    doj: "",
    department: "",
  });
  const [deleteModal, setDeleteModal] = useState({ show: false, id: "" });
  const [isloading, setIsloading] = useState(true);

  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("/agent")
      .then((response) => response.json())
      .then((data) => {
        setAgents(data);
        setIsloading(false);
        // console.log(data)
      });
  });

  return (
    <div className="container">
      {agents.length === 0 && isloading ? (
        <Row style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
          <Spinner animation="border" variant="primary"></Spinner>{" "}
        </Row>
      ) : (
        <>
          <Button
            variant="primary"
            onClick={() => setAddModal(true)}
            className="mb-2"
          >
            Add agent
          </Button>
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
                  <td>{agent.agentId}</td>
                  <td>{agent.firstName}</td>
                  <td>{agent.lastName}</td>
                  <td>{agent.dateofJoining}</td>
                  <td>{agent.department}</td>
                  <td>
                    {" "}
                    <Button
                      variant="primary"
                      className="mr-2"
                      onClick={() =>
                        setEditModal({
                          show: true,
                          id: agent.agentId,
                          firstname: agent.firstName,
                          lastname: agent.lastName,
                          doj: agent.dateofJoining,
                          department: agent.department,
                        })
                      }
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() =>
                        setDeleteModal({ show: true, id: agent.agentId })
                      }
                    >
                      Delete
                    </Button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <AddAgentModal show={addModal} onHide={() => setAddModal(false)} />
          <EditAgentModal
            show={editModal.show}
            onHide={() => setEditModal({ show: false })}
            agent={editModal}
          />
          <DeleteAgentModal
            show={deleteModal.show}
            agent={deleteModal}
            onHide={() => setDeleteModal({ show: false })}
          />
        </>
      )}
    </div>
  );
};

export default Agent;
