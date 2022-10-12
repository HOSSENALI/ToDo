import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap'

import Layout from '../components/layouts/Layout';
import TaskLists from './TaskLists';
import AddTask from '../components/AddTask';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTasksDataAction } from '../redux/actions/TaskAction';

function TaskListPage() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const [tasks, setTasks] = useState([]);
  const tasks = useSelector((state) => state.TaskReducer.tasks);
  console.log("innnn",tasks)
 
  useEffect(() => {
    //  initializeData();
    dispatch(getTasksDataAction());
    
  }, []);

  return (
    <>
      <Layout>
        
        {/* <CounterComponent /> */}
        <br/>

        <Modal
          show={show}
          onHide={handleClose}
          animation={true}
          centered
        >
          <AddTask handleClose={handleClose} setShow={setShow} />
        </Modal>
        <TaskLists tasks={tasks} handleShow={handleShow} />

      </Layout>
    </>
  );
}

export default TaskListPage;
