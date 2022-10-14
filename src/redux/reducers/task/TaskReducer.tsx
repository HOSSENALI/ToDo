import * as Types from '../../types/Types'
//initialize a store object.............
export interface Task {

    todo: {
      title: string,
      status: string,
      deadline: string,
      createdAt:string,
    },

    id:string
}
export interface InitializeState {
  tasks:Task[],
  id:string,
  taskForm:{
    title:string,
    status:string,
    deadline:string,
    createdAt:string,

  }
}
const initializeState :InitializeState= {
  tasks:[],
  id:"",
  taskForm: {
    title: "",
    status: "",
    deadline:"",
    createdAt:""
  }
};

//Do jobs on changes on action...........

function TaskReducer(state = initializeState, action:Types.TaskActions):InitializeState {
  switch (action.type) {

    case Types.GET_TASK_DETAILS://if i make Type this way,less mistake could happen
    return {
        ...state,
        taskForm: action.payload.todo,
        id: action.payload.id
      
      };
      break;
    case Types.GET_TASK:
      return {
        ...state,
        tasks: action.payload.tasks,
      }
      break;
    default:
      break;
  }
  return state;
}
export default TaskReducer;