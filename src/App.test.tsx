import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { getTasksDataAction } from "./redux/actions/TaskAction";




test("renders App Correctly", () => {
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
render(
<Provider store={taskStore}>
<App />
</Provider>
)
  const linkElement = screen.getByText(/Sign in with your email and password/i);  
  expect(linkElement).toBeInTheDocument();




})


 