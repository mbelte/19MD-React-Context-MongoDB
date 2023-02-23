import {createContext, useContext} from "react";

type TodoFormContext = {
    todoItem: {
        title:string;
        content: string;
    };
    setTodoItem?: Function;
}

export const TodoFormContext = createContext<TodoFormContext>({
    todoItem: {
        title: '',
        content: ''
    }
});

export const useTodoFormContext = () => {
    const { todoItem, setTodoItem } = useContext(TodoFormContext);

    if (!setTodoItem) {
        throw Error('setTodoItem function is mandatory in TodoFormContext')
    }

    return { todoItem, setTodoItem }
}