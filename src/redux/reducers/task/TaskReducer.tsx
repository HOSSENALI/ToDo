import { DocumentData } from "firebase/firestore";
import { GET_TASKS } from "../../actions/actionTypes";
import * as Types from "../../types/Types";
//initialize a store object.............
export interface Task {
  id: string,
  todo: DocumentData
}
export interface InitializeState {
  tasks: Task[];
  id: string;
  taskForm: {
    createdAt: string;
    deadline: string;
    status: string;
    title: string;
   
  };
}
const initializeState: InitializeState = {
  tasks: [],
  id: "",
  taskForm: {
    createdAt: "",
    deadline: "",
    status: "",
    title: "" 
  },
};

//Do jobs on changes on action...........
function TaskReducer(
  state = initializeState,
  action: Types.TaskActions
): InitializeState {
  switch (action.type) {
    case Types.GET_TASK_DETAILS: //if i make Type this way,less mistake could happen
      return {
        ...state,
        taskForm: action.payload.todo,
        id: action.payload.id,
      };
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload.tasks,
      };
    default:
      break;
  }
  return state;
}
export default TaskReducer;
