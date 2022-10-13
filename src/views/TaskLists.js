import moment from "moment";
import React from "react";
import { Card, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTasksDataAction } from "../redux/actions/TaskAction";
const TaskLists = (props) => {
  const { tasks, handleShow } = props;
  //  console.log("innnn",tasks)
  const dispatch = useDispatch();

  const overdueCheck = (deadline, status) => {
    let result = Date.parse(moment(deadline).format("YYYY-MM-DD")) - Date.now();
    // console.log(Date.parse(moment(deadline).format("YYYY-MM-DD")));
    if (result < 0 && status === "Pending") {
      return true;
    } else return false;
  };

  return (
    <Card className="card">
      <Card.Body>
        <div>
          <Card.Title className="text-center todo-title">My Todos</Card.Title>

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
                {/* <td>
                  {overdueCheck(task.todo.deadline) < 0 && (
                    <span>{task.todo.deadline}</span>
                  )}
                  {overdueCheck(task.todo.deadline) > 0 && (
                    <span style={{color:'red'}}>{task.todo.deadline}</span>
                  )}
                </td> */}
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
                  <Link to={`/edit/${task.id}`}>
                    <span>
                      <i className="fa fa-pencil text-success pointer mr-2">
                        {" "}
                        Edit Task
                      </i>
                    </span>
                  </Link>

                  <span>
                    {" "}
                    <i
                      className="fa fa-trash text-danger pointer ml-2"
                      onClick={() => dispatch(deleteTasksDataAction(task.id))}
                    >
                      {" "}
                      Delete Task
                    </i>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default TaskLists;
