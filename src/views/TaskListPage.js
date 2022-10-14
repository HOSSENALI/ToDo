import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useEffect, useState } from 'react';
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
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = () => setShowEditModal(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const [tasks, setTasks] = useState([]);
  const tasks = useSelector((state) => state.TaskReducer.tasks); 
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
        {/* <Modal
          show={showEditModal}
          onHide={handleCloseEditModal}
          animation={true}
          centered
            >
                <TaskListPage/>

            </Modal> */}
      </Layout>
    </>
  );
}

export default TaskListPage;
