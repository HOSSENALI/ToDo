
import { combineReducers } from 'redux';
import TaskReducer from './task/TaskReducer';
const rootReducer = combineReducers({
    TaskReducer: TaskReducer,
});
export type rootState= ReturnType<typeof rootReducer>
export default rootReducer;