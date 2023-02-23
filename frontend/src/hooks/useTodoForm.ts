import { useTodoFormContext } from "../context/TodoFormContext";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../main";
import { postTodo } from "../assets/apiCalls";

export default function useTodoForm() {
    const { todoItem, setTodoItem } = useTodoFormContext()

    const { mutate } = useMutation({
        mutationFn: postTodo,
        onSuccess: () => {
          queryClient.invalidateQueries({ 
            queryKey: ["todos"],
          })
        }
    })
    
    return { todoItem, setTodoItem, mutate }
}
