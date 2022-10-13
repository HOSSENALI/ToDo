import axios from "axios";
import * as Types from "../types/Types";
import db from "../../firebase";

export const getTasksDataAction = () => (dispatch) => {
  // axios
  //     .get("https://todo-app37.herokuapp.com/loadTodo")
  //     .then((response) => {
  //         console.log("hi",response);
  //         let data = response.data;
  //         data.sort();
  //         data.reverse();
  //     dispatch({ type: Types.GET_TASK, payload: data });
  // });
  db.collection("todos").onSnapshot((snapshot) => {
    let data = snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data() }));
    console.log("hi", data.todo);
    dispatch({ type: Types.GET_TASK, payload: data });
  });
};
export const getTasksDetailsDataAction = (id) => (dispatch) => {
  axios
    .get(`https://todo-app37.herokuapp.com/singleTodo?id=${id}`)
    .then((response) => {
      let data = response.data;
      dispatch({ type: Types.GET_TASK_DETAILS, payload: data });
    });
};

export const storeTasksDataAction = (taskItem) => (dispatch) => {
  console.log("bal", taskItem);
  if (taskItem.title.length === 0 || taskItem.status === "") {
    alert("Please enter each value");
    return false;
  }
  // axios
  //     .post("https://todo-app37.herokuapp.com/addTodo", taskItem)
  //     .then((response) => {
  //         dispatch({ type: "ADD_TASK", payload: taskItem });
  //         dispatch(getTasksDataAction());
  //     });
  db.collection("todos").add(taskItem);
};
export const updateTasksDataAction = (taskItem, id) => (dispatch) => {
  if (taskItem.Title.length === 0 || taskItem.Priority === "") {
    alert("Please enter each value");
    return false;
  }
  axios
    .patch(`https://todo-app37.herokuapp.com/updateTodo?id=${id}`, taskItem)
    .then((response) => {
      if (response.data.ok == 1) {
        alert("Updated");
      } else {
        alert("wrong");
      }
    });
};

export const deleteTasksDataAction = (id) => {
  db.collection("todos").doc(id).delete();
};

export const handleChangeTextInputAction = (name, value) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.CHANGE_TASK_INPUT, payload: formData });
  formData = {
    name: "",
    value: "",
  };
};
