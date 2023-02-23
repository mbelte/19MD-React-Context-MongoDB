type TodoPostType = {
    title: string;
    content: string;
}

type TodoFullType = TodoPostType & {
    id: string;
    isDone: boolean;
    date: string;
}

type TodoRequestFullType = TodoPostType & {
    _id: string;
    isDone: boolean;
    date: string;
    __v?: number;
}

type TodoIsDoneRequestType = {
    id: string;
    isDone: boolean;
}

export type { 
    TodoPostType, 
    TodoFullType, 
    TodoRequestFullType,
    TodoIsDoneRequestType 
}