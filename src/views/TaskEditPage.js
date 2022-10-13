import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import EditTask from "../components/EditTask";
import Layout from "../components/layouts/Layout";
const TaskDetailsPage = () => {
  // console.log(props)
  const [showEditModal, setShowEditModal] = useState(true);
  const handleCloseEditModal = () => setShowEditModal(false);
//   const handleShowEditModal = () => setShowEditModal(true);

  
//   const editUser = (item) => {
//     setEditData(item);
//     handleShowEditModal();


// }
  return (
    <>
      <Layout>
       
      </Layout>
    </>
  );
};

export default TaskDetailsPage;
