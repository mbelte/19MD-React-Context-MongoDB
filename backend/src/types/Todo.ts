type TodoBodyType = {
    title: string;
    content: string;
}

type TodoFullType = TodoBodyType &{
    id: string;
    isDone: boolean;
    date: string;
}

type TodoIsDoneRequestType = {
    id: string;
    isDone: boolean;
}

export { 
    TodoBodyType, 
    TodoFullType, 
    TodoIsDoneRequestType 
}