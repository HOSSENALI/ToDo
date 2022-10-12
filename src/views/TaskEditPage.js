import React from 'react'
import EditTask from '../components/EditTask';
import Layout from '../components/layouts/Layout';
const TaskDetailsPage = (props) => {
    return (
        <>
            <Layout>
               <EditTask props={props} />
            </Layout>
        </>
    );
}

export default TaskDetailsPage;