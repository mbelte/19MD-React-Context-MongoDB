import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../assets/apiCalls";

export default function useGetTodos() {
    const { data: allTodos, isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: getTodos
    })

    return { allTodos, isLoading }
}