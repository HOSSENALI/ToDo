import  {  useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { updateTasksDataAction } from "../redux/actions/TaskAction";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../redux/reducers/RootReducer";
import { Button } from "react-bootstrap";

export interface IProps{
  handleCloseEditModal:(a:boolean)=>void
}

const EditTask = (props: IProps) => {
  const { handleCloseEditModal } = props;
  const taskForm = useSelector((state:rootState) => state.TaskReducer.taskForm);
  const taskId = useSelector((state:rootState) => state.TaskReducer.id);

  const [title, setTitle] = useState(taskForm.title);
  const [status, setStatus] = useState(taskForm.status);
  const dispatch = useDispatch();

  const handleClose = () => {
    handleCloseEditModal(false);
  };

  const updateTask = async () => {
    if (checkValidation()) {
      const newTaskForm = {
        title: title,
        status: status,
      }
      dispatch(updateTasksDataAction(newTaskForm, taskId));
      console.log("last");
      handleCloseEditModal(false);
    }
  };
  const checkValidation = () => {
    if (title.length < 10) {
      alert("Title must be more than 10 characters");
      return false;
    }
    if (title.length === 0) {
      alert("Please enter title ");
      return false;
    }
    if (status === "") {
      alert("Please select status");
      return false;
    }

    return true;
  };
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="4">
              Status
            </Form.Label>
            <Col sm="6">
              <select
                className="form-control"
                style={{ appearance: "revert" }}
                required
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value={""}>Please select Status</option>
                <option value={"Done"}>Done</option>
                <option value={"Pending"}>Pending</option>
              </select>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={updateTask}>
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
};

export default EditTask;
