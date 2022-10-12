import { createStore } from "redux";

console.log("Hi");
//initialize a store object.............
const initializeState = {
  counter: 0,
  taskForm: {
    Title: "",
    Priority: ""
  },
  taskList: []
};
//Do jobs on changes on action...........
function counterReducer(state = initializeState, action) {
  switch (action.type) {
    case "INCREMENT_ONE":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "DECREMENT_ONE":
      return {
        ...state,
        counter: state.counter - 1,
      };

    case "INCREMENT":
      return {
        ...state,
        counter: 1111 ,
      };
    case "Add_NewTask":
      return {
        ...state,
        taskForm: action.payload,
      };
    case "Add_NewTaskToLIst":
      console.log("from ", action.payload);
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };
  

    default:
      break;
  }
  return state;
}

//Set a store.......................
let store = createStore(counterReducer)

//Listen that anything changes in the store...............
store.subscribe(() => console.log(store.getState()))

//Get Data
store.dispatch({ type: "INCREMENT_ONE" });
store.dispatch({ type: "DECREMENT_ONE" });
store.dispatch({ type: "INCREMENT"});
const task = {
  Title: "First Task",
  Priority: "High",
}
store.dispatch({ type: "Add_NewTask", payload: task });
store.dispatch({ type: "Add_NewTaskToLIst", payload: task });
const task2 = {
  Title: "First Task",
  Priority: "High",
}
store.dispatch({ type: "Add_NewTaskToLIst", payload: task2 });

