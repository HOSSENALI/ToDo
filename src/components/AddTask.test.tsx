//Add task test

import { render, screen, fireEvent } from "@testing-library/react";
import AddTask from "./AddTask";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { type } from "@testing-library/user-event/dist/type";

test("renders AddTask Correctly and saving data", () => {
    const initialState = {
        tasks: [],
        id: '',
        taskForm: {
        createdAt: '',
        deadline: '',
        status: '',
        title: ''
         
        }
    }
    
    const mockStore = configureStore();
    const taskStore = mockStore(initialState)
    const handleClose = jest.fn();
    const setShow = jest.fn(); 

    render(
    <Provider store={taskStore}>
    <AddTask handleClose={handleClose} setShow={setShow} />
    </Provider>
    )
    const addTaskHeader = screen.getByText(/Add Task/i);  
    expect(addTaskHeader).toBeInTheDocument();
    
    const title = screen.getByTestId('title');
    type (title, 'test title');
    expect(title).toHaveValue('test title');

    const status = screen.getByTestId('status');
    fireEvent.select(status, {target: {value: 'Pending'}});
    expect(status).toHaveValue('Pending');

    const buttonSubmit = screen.getByTestId('submit');

    const expectedDispatchedAction = {
        type: 'STORE_TASKS_DATA',
        payload: {
            title: 'test title',
            status: 'Pending',
            deadline: '',
            createdAt: '',
            userEmail: ''
        }
    }

    taskStore.dispatch(expectedDispatchedAction);


    taskStore.getState()

    expect(taskStore.getActions()).toEqual([expectedDispatchedAction]);








     
  
    

    
    })
