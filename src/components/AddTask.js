import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { handleChangeTextInputAction, storeTasksDataAction } from '../redux/actions/TaskAction';
import { useDispatch, useSelector } from 'react-redux';

const AddTask = (props) => {
    const [Title, setTitle] = useState('');
    const [Priority, setPriority] = useState('');
    const dispatch = useDispatch();
    const { handleClose, setShow } = props;

    // const taskForm = useSelector((state) => state.TaskReducer.taskForm);
   
    // const handleChangeText = (name, value) => {
    //     dispatch(handleChangeTextInputAction(name, value));
    // }

    const saveTask = async () => {
       const taskForm={
        Title:Title,
        Priority:Priority
       }
        dispatch(storeTasksDataAction(taskForm));
        setShow(false);
    }
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
                            value={Title} onChange={e => setTitle(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3"
                        controlId="formPlaintextPassword"
                    >
                        <Form.Label column sm="4">
                            Priority
                        </Form.Label>
                        <Col sm="6">
                            <select className='form-control' style={{ appearance: "revert" }} required
                                value={Priority} onChange={e => setPriority(e.target.value)}>

                                <option value={''}>Please select Priority</option>
                                <option value={'High'}>High</option>
                                <option value={'Low'}>Low</option>
                                <option value={'Medium'}>Medium</option>

                            </select>
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" onClick={handleClose}>
                    Close
                </button>
                <button variant="primary" onClick={saveTask}  >
                    Save Changes
                </button>
            </Modal.Footer>

        </>
    );
}

export default AddTask;