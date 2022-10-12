import axios from 'axios';
//getting data from API
export const getTasksData = async () => {
    let data = [];
    await axios.get("https://todo-app37.herokuapp.com/loadTodo")
        .then(response => {
            
            data = response.data;
           
        });
    return data;
}
//Storing data to API
export const storeTaskData = async (newTask) => {
    let isAdded = false;

    await axios.post("https://todo-app37.herokuapp.com/addTodo", newTask)
        .then((response) => {
            isAdded = response.data; //getting true or false,means added or not
        });
    return isAdded;
}
