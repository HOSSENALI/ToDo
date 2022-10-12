import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTasksDataAction } from '../redux/actions/TaskAction';
const TaskLists = (props) => {
    const { tasks, handleShow } = props;
    //  console.log("innnn",tasks)
    const dispatch=useDispatch();
    return (<>
        <div>
            <div style={{ float: "left" }}>
                <h2>User Lists</h2>
            </div>


            <div className='float-right'>
                <button className="btn btn-success" onClick={handleShow} >+ Add Task</button>
            </div>
        </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Task Title</th>
                    <th>Status</th>
                    <th>Deadline</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{task.todo.title}</td>
                        <td>{task.todo.status}</td>
                        <td>{task.todo.deadline}</td>
                        <td>
                            <Link to={`/edit/${task.id}`}>
                            <span><i className='fa fa-pencil text-success pointer mr-2'> Edit Task {task.id}</i></span>
                        </Link>

                        <span> <i className='fa fa-trash text-danger pointer ml-2'onClick={()=>dispatch(deleteTasksDataAction(task.id))}> Delete Task</i></span>
                    </td>
                    </tr>
                ))}



        </tbody>
    </Table>
    </>
    );
}

export default TaskLists;