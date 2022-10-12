import * as Types from '../../types/Types'
//initialize a store object.............
const initializeState = {
  counter: 0,
};
//Do jobs on changes on action...........

function counterReducer(state = initializeState, action) {
  switch (action.type) {
    case "INCREMENT_ONE":
      const upDatedValue = typeof action.payload === "undefined" ? 1 : action.payload;
      return {
        ...state,
        counter: state.counter + parseInt(upDatedValue),
      };
      

    case Types.DECREMENT_ONE:
      return {
        ...state,
        counter: state.counter - 1,
      };
      
    case Types.UPDATE:
      
      return {
        ...state,
        counter: parseInt(action.payload),
      };
     
    default:
      break;
  }
  return state;
}
export default counterReducer;