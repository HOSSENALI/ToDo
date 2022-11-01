import { Task } from "../reducers/task/TaskReducer";

//types of Task............
export const GET_TASK = "GET_TASK";

export const GET_TASK_DETAILS = "GET_TASK_DETAILS";

export interface TaskForm {
  title: string;
  status: string;
  deadline: string;
  createdAt: string;
}
export interface newTaskForm {
  title: string;
  status: string;
}

export type GET_TASK_DETAILS = {
  type: typeof GET_TASK_DETAILS;
  payload: {
    todo: TaskForm;
    id: string;
  };
};

export type GetTasksActionsType = {
  type: "GET_TASKS";
  payload: {
    tasks: Task[];
  };
};
export type TaskActions = GET_TASK_DETAILS | GetTasksActionsType;
