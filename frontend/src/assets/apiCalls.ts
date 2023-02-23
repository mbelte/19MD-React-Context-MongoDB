import axios from "axios";
import { TodoIsDoneRequestType, TodoPostType } from "./types";



const baseURL = 'http://localhost:3004'
const host = axios.create({
    baseURL
});


export const postTodo = async (todo: TodoPostType) => {
    const { data } = await host.post('/todo', todo)
    return data
}

export const getTodos = async () => {
    const { data } = await host('/todo')
    return data
}

export const updateTodoStatus = async ({ id, isDone }: TodoIsDoneRequestType) => {
    const { data } = await host.patch('/todo-update-status', { id, isDone })
    return data
}

export const deleteTodo = async ({ id }: {id: string}) => {
    const { data } = await host.delete(`/todo/${ id }`)
    return data
}