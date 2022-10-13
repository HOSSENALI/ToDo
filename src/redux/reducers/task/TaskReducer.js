import * as Types from '../../types/Types'
//initialize a store object.............
const initializeState = {
  tasks: [],
  id:"",
  taskForm: {
    title: "",
    status: "",
    deadline:"",
    createdAt:""
  }
};

//Do jobs on changes on action...........

function TaskReducer(state = initializeState, action) {
  switch (action.type) {

    case Types.GET_TASK_DETAILS://if i make Type this way,less mistake could happen
    console.log(action.payload.id)  
    return {
        ...state,
        taskForm: action.payload.todo, id:action.payload.id
      };
      break;
    case Types.GET_TASK:
      return {
        ...state,
        tasks: action.payload,

      }
      break;
    default:
      break;
  }
  return state;
}
export default TaskReducer;