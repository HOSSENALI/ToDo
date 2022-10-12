
import { combineReducers } from 'redux';
import counterReducer from './counter/CounterReducer';
import TaskReducer from './task/TaskReducer';
const rootReducer = combineReducers({
    CounterReducer: counterReducer,
    TaskReducer: TaskReducer,
});

export default rootReducer;