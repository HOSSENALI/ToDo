import * as Types from '../../types/Types'
//initialize a store object.............
const initializeState = {
  tasks: [],
  taskForm: {
    title: "",
    status: ""
  }
};

//Do jobs on changes on action...........

function TaskReducer(state = initializeState, action) {
  switch (action.type) {

    // case Types.ADD_TASK://if i make type this way,less mistake could happen
    //   return {
    //     ...state,
    //     taskForm: {
    //       Title: "",
    //       Priority: ""
    //     }
    //   };
    //   break;
    case Types.GET_TASK_DETAILS://if i make type this way,less mistake could happen
      return {
        ...state,
        taskForm: action.payload
      };
      break;
    case Types.GET_TASK:
      return {
        ...state,
        tasks: action.payload,

      }
      break;
    case Types.CHANGE_TASK_INPUT:
      const taskForm = { ...state.taskForm };
      taskForm[action.payload.name] = action = action.payload.value;
      return {
        ...state,
        taskForm: taskForm,
      }
      break;
    default:
      break;
  }
  return state;
}
export default TaskReducer;