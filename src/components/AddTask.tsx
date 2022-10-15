import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {serverTimestamp} from 'firebase/firestore';

import { storeTasksDataAction } from "../redux/actions/TaskAction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { type } from "@testing-library/user-event/dist/type";

type Iprops= {
 handleClose:()=> void;
 setShow:(a:boolean)=> void
}

export type singleTask = {
  title: string,
  status: string,
  deadline?: string,
  createdAt?:any
}
const AddTask = (props:Iprops) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const dispatch = useDispatch();
  const { handleClose, setShow } = props;


  const saveTask = async () => {

    if (checkValidation()) {
      const taskForm:singleTask = {
        title,
        status,
        deadline: moment(deadline).format("YYYY-MM-DD"),
        createdAt:serverTimestamp()
      };

      dispatch(storeTasksDataAction(taskForm));
      setShow(false);
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
    if (deadline === null) {
      alert("Please select a deadline");
      return false;
    }
    return true;
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add Task</Modal.Title>
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
              Deadline
            </Form.Label>
            <Col sm="5">
              <DatePicker
                selected={deadline}
                onChange={(date: Date) => setDeadline(date)}
                dateFormat="yyyy/MM/dd"
                filterDate={(date:Date) => date.getDay() != 6 && date.getDay() != 0}
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
              />
            </Col>
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
        <button  onClick={handleClose}>
          Close
        </button>
        <button  onClick={saveTask}>
          Save Changes
        </button>
      </Modal.Footer>
    </>
  );
};

export default AddTask;
