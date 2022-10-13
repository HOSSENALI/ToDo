import * as Types from "../types/Types";
import db from "../../firebase";
//getting data from databse.....................................................
export const getTasksDataAction = () => (dispatch) => {
  db.collection("todos")
    .orderBy("createdAt", "desc")
    .onSnapshot((snapshot) => {
      let data = snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data() }));
      dispatch({ type: Types.GET_TASK, payload: data });
    });
};

//storing data to database.......................................................
export const storeTasksDataAction = (taskItem) => (dispatch) => {
  db.collection("todos").add(taskItem);
};

//getting task details for every single task and saving to state ................
export const getTasksDetailsDataAction = (task) => (dispatch) => {
  dispatch({ type: Types.GET_TASK_DETAILS, payload: task });
};

//updating data to database......................................................
export const updateTasksDataAction = (taskFormNew, taskId) =>()=> {
  db.collection("todos").doc(taskId).set(taskFormNew, { merge: true });
};
//deleting task from database......................................................
export const deleteTasksDataAction = (id) => {
  db.collection("todos").doc(id).delete();
};
