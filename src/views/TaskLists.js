import moment from "moment";
import React, { useState } from "react";
import { Button, Card, Modal, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import EditTask from "../components/EditTask";
import { deleteTasksDataAction, getTasksDetailsDataAction } from "../redux/actions/TaskAction";
const TaskLists = (props) => {
  const { tasks, handleShow } = props;
  const [editData, setEditData] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = () => setShowEditModal(true);
  const dispatch = useDispatch();

  const overdueCheck = (deadline, status) => {
    let result = moment(deadline).diff(moment().format('YYYY-MM-DD'),'days');
    if (result < 0 && status === "Pending") {
      return true;
    } else return false;
  };
  const editUser = (task) => {
    dispatch(getTasksDetailsDataAction(task));
    handleShowEditModal();
}
  return (
    <Card className="card">
      <Card.Body>
        <div>
          <Card.Title className="text-center todo-title"><h1>My Todos</h1></Card.Title>

          <div className="float-right mb-3">
            <button className="btn btn-success" onClick={handleShow}>
              + Add Task
            </button>
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Task Title</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {tasks.length === 0 && (
            <h3 style={{ marginLeft: "300px" }}>
              Sorry!!! You have no todo.........
            </h3>
          )}
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.todo.title}</td>
                
                <td>
                  {overdueCheck(task.todo.deadline, task.todo.status) ? (
                    <span style={{ color: "red" }}>{task.todo.deadline}</span>
                  ) : (
                    <span>{task.todo.deadline}</span>
                  )}
                </td>
                <td>
                  {task.todo.status === "Pending" && task.todo.status}
                  {task.todo.status === "Done" && <del>{task.todo.status}</del>}
                </td>

                <td>                
                    <Button
                      className="fa fa-pencil btn btn-success pointer ml-2"
                      onClick={() => editUser(task)}
                    >
                      {" "}
                      Edit
                    </Button>
                 
                    <Button
                      className="fa fa-trash btn btn-danger pointer ml-2"
                      onClick={() => dispatch(deleteTasksDataAction(task.id))}
                    >
                      {" "}
                      Delete
                    </Button>            
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
      <Modal
          show={showEditModal}
          onHide={handleCloseEditModal}
          animation={true}
          centered
        >
            <EditTask handleCloseEditModal={handleCloseEditModal} editData={editData}/>
        </Modal>
    </Card>
  );
};

export default TaskLists;
