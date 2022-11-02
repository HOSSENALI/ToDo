import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Layout from "../components/layouts/Layout";
import TaskLists from "./TaskLists";
import AddTask from "../components/AddTask";
import { useDispatch } from "react-redux";
import { getTasksDataAction } from "../redux/actions/TaskAction";

function TaskListPage() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    //  initializeData();
    dispatch(getTasksDataAction());
  }, [dispatch]);

  return (
    <div>
      <Layout>
        <br />
        <Modal show={show} onHide={handleClose} animation={true} centered>
          <AddTask handleClose={handleClose} setShow={setShow} />
        </Modal>
        <TaskLists handleShow={handleShow} />
      </Layout>
    </div>
  );
}

export default TaskListPage;
