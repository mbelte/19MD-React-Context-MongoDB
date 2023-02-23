import TodoListItem from "./TodoListItem";
import { useContext } from "react";
import { TodoItemsContext } from "../context/TodoItemsContext";


const TodoList = () => {
  const { todos } = useContext(TodoItemsContext)

  return (
    <>
      {
        todos.length ? (
          <ul className="tasks__list">
            {
              todos.map(({ _id, title, content, isDone, date }) => (
                <TodoListItem 
                  key={ _id }
                  id={ _id }
                  title={ title }
                  content={ content }
                  isDone={ isDone }
                  date={ date }
                />
              ))
            }
          </ul>
        ) : (
          <h3 className="info">
            There are no Todos to show. Please add new Todo.
          </h3>
        )
      }
    </>
  );
};

export default TodoList;
