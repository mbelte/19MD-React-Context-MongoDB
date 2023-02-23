import  {createContext } from "react";
import { TodoRequestFullType } from "../assets/types";

type TodoFetchType = {
    todos: TodoRequestFullType[]
}

export const TodoItemsContext = createContext<TodoFetchType>({
    todos: []
});