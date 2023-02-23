import { useState } from "react";
import { TodoFormContext } from "./context/TodoFormContext";
import { TodoItemsContext } from "./context/TodoItemsContext";
import useGetTodos from "./hooks/useGetTodos";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

export const formInitValues = {
  title: '',
  content: ''
}

function App() {
  const [todoItem, setTodoItem] = useState(formInitValues);
  const { allTodos , isLoading} = useGetTodos();

  if (isLoading) {
    return <h1>Loading ...</h1>
  }

  if (!allTodos) {
    return <h1>An Error occurred</h1>
  }

  return (
    <TodoItemsContext.Provider value={{ todos: allTodos }}>
      <TodoFormContext.Provider
      value={{
        todoItem,
        setTodoItem,
      }}
    >
      <div className="App">
        <h1 className="main-heading">Todo App</h1>

        <div className="tasks">
          <Form />
          <TodoList />
        </div>
      </div>
    </TodoFormContext.Provider>
    </TodoItemsContext.Provider>
  );
}

export default App;
