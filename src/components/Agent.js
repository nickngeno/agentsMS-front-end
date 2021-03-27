import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { AddAgentModal } from "./AddAgentModal";
import { DeleteAgentModal } from "./DeleteAgentModal";
import EditAgentModal from "./EditAgentModal";
import { useState, useEffect } from "react";

const Agent = () => {
  const [showaddModal, setShowaddModal] = useState(false);
  const [editModal, setEditModal] = useState({
    show: false,
    id: "",
    firstname: "",
    lastname: "",
    doj: "",
    department: "",
    picture: "",
  });
  const [deleteModal, setDeleteModal] = useState({ show: false, id: "" });
  const [agents, setAgents] = useState([]);
// console.log(showaddModal)
  useEffect(() => {
    let mounted = true;
    fetch("/agent")
      .then((response) => response.json())
      .then((data) => {
        if (mounted) {
          setAgents(data);
          // console.log(data);
        }
      });

    return () => {
      mounted = false;
    };
  });

  return (
    <div className="container">
      <Button
        variant="primary"
        onClick={() => setShowaddModal(true)}
        className="mb-2 mt-2"
      >
        Add agent
      </Button>
      {agents.length === 0 ? (
        <Row
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            paddingTop: "1rem",
          }}
        >
          <Spinner animation="border" variant="primary"></Spinner>{" "}
        </Row>
      ) : (
        <>
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
                          picture: agent.picture,
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
          <AddAgentModal
            show={showaddModal}
            onHide={() => setShowaddModal(false)}
          />
          <EditAgentModal
            show={editModal.show}
            onHide={() => setEditModal({ show: false })}
            agentdetail={editModal}
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
