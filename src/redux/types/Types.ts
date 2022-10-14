import { Task } from "../reducers/task/TaskReducer";

//types of Task............
export const GET_TASK="GET_TASK";
export const ADD_TASK="ADD_TASK";

//types of Task............
export const DECREMENT_ONE="DECREMENT_ONE";
export const UPDATE="UPDATE";
export const CHANGE_TASK_INPUT="CHANGE_TASK_INPUT";
export const GET_TASK_DETAILS="GET_TASK_DETAILS";

export interface TaskForm {
  title:string,
    status:string,
    deadline:string,
    createdAt:string,
}

export type GET_TASK_DETAILS = {
    type: typeof GET_TASK_DETAILS;
    payload: {
      todo: TaskForm,
      id:string
    };
  };
export type GET_TASK = {
    type: typeof GET_TASK;
    payload: {
      tasks: Task[],
    };
  };

  export type TaskActions =
  | GET_TASK_DETAILS
  | GET_TASK;
