
import { combineReducers } from 'redux';
import TaskReducer from './task/TaskReducer';
const rootReducer = combineReducers({
    TaskReducer: TaskReducer,
});

export default rootReducer;