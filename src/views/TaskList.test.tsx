import { fireEvent,render, screen } from "@testing-library/react";
import { renderHook, act } from '@testing-library/react-hooks/pure'
import TaskLists from "./TaskLists";
import { Provider } from "react-redux";
import Store from "../redux/store/Store";

let store = Store();
const handleShow = jest.fn();
describe("Taslist test", () => {
  test("renders correctly", () => {
    
    render(
      <Provider store={store}>
        <TaskLists handleShow={handleShow} />
      </Provider>
    );
    const textElement = screen.getByText("+ Add Task");
    expect(textElement).toBeInTheDocument();

    const addButton = screen.getByRole("button", { name: "+ Add Task" });
    fireEvent.click(addButton);
  });
  
  test('Table renders correctly', () => {
    render(
      <Provider store={store}>
        <TaskLists handleShow={handleShow} />
      </Provider>
    );
    const tableElement = screen.getByRole('table')
    expect(tableElement).toBeInTheDocument()
  })



});
