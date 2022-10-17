import moment from "moment";
import React, { useState } from "react";
import { Button, Card, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import EditTask from "../components/EditTask";
import {
  deleteTasksDataAction,
  getTasksDetailsDataAction,
} from "../redux/actions/TaskAction";
import { rootState } from "../redux/reducers/RootReducer";
import { Task } from "../redux/reducers/task/TaskReducer";

interface IProps {
  handleShow: () => void;
}
const TaskLists = (props: IProps) => {
  const tasks = useSelector((state: rootState) => state.TaskReducer.tasks);
  const { handleShow } = props;
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = () => setShowEditModal(true);
  const dispatch = useDispatch();

  const overdueCheck = (deadline: string, status: string) => {
    let result = moment(deadline).diff(moment().format("YYYY-MM-DD"), "days");
    if (result < 0 && status === "Pending") {
      return true;
    } else return false;
  };
  const editTodo = (task: Task) => {
    dispatch(getTasksDetailsDataAction(task));
    handleShowEditModal();
  };
  return (
    <Card>
      <Card.Body className="table-responsive-sm">
        <div>
          <Card.Title className="text-center">
            <h1 className="headline">My Todos</h1>
              <button className="btn btn-success float-right mb-2" onClick={handleShow}>
                + Add Task
            </button>
          </Card.Title>
        </div>
        <div>
        <Table striped bordered hover className="headline">
          <thead>
            <tr>
              <th>No</th>
              <th>Task Title</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            <tr>
              <th colSpan={5}>
              {tasks?.length === 0 && (
              <h3 >
                Sorry!!! You have no todo.........
              </h3>
          )}
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((task, index) => (
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
                    onClick={() => editTodo(task)}
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
        </div>
        
      </Card.Body>
      <Modal
        show={showEditModal}
        onHide={handleCloseEditModal}
        animation={true}
        centered
      >
        <EditTask handleCloseEditModal={handleCloseEditModal} />
      </Modal>
    </Card>
  );
};

export default TaskLists;
