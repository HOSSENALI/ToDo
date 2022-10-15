import * as Types from "../types/Types";
import db from "../../components/utils/firebase/firebase.utils";
import { Dispatch } from "redux";
import { GET_TASKS } from "./actionTypes";
import { Task } from "../reducers/task/TaskReducer";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { singleTask } from "../../components/AddTask";
//getting data from databse.....................................................

export function getTasksAction(tasks: Task[]): Types.GetTasksActionsType {
  return {
    type: GET_TASKS,
    payload: {
      tasks,
    },
  };
}
export const getTasksDataAction = () => (dispatch: Dispatch) => {
  // @ts-ignore
  const userData = JSON.parse(localStorage.getItem("userData")) || undefined;
  const dataQuery = query(
    collection(db, "todos"),
    where("userEmail", "==", userData.user.email)
  );
  onSnapshot(dataQuery, (querySnapshot) => {
    let data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      todo: doc.data(),
    }));
    dispatch(getTasksAction(data));
  });
};

//storing data to database.......................................................
export const storeTasksDataAction =
  (taskItem: singleTask) => (dispatch: Dispatch) => {
    db.collection("todos").add(taskItem);
  };

//getting task details for every single task and saving to state ................
export const getTasksDetailsDataAction =
  (task: Task) => (dispatch: Dispatch) => {
    dispatch({ type: Types.GET_TASK_DETAILS, payload: task });
  };

//updating data to database......................................................
export const updateTasksDataAction = (taskFormNew: any, taskId: any) => () => {
  db.collection("todos").doc(taskId).set(taskFormNew, { merge: true });
};
//deleting task from database......................................................
export const deleteTasksDataAction = (id: string) => {
  db.collection("todos").doc(id).delete();
};
