import { queryClient } from "../main";
import { useMutation } from "@tanstack/react-query";
import { updateTodoStatus, deleteTodo } from "../assets/apiCalls";

export default function useTodoMutation() {
    const { mutate: mutateStatus } = useMutation({
        mutationFn: updateTodoStatus,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['todos']
            })
        }
    })

    const { mutate: mutateDelete } = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['todos']
            })
        }
    })

    return { mutateDelete, mutateStatus}
}