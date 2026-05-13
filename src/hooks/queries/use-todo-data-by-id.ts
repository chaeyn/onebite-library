import { useQuery } from "@tanstack/react-query";
import { fetchTodoById } from "@/api/fetch-todo-by-id.ts";

export function useTodoDataById(id: number) {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: ["todos", id],

    retry: 1,
    staleTime: 300000,
    gcTime: 5000, // 가비지 컬렉터 시간 (inactive -> GC excute time)

    // refetchInterval: 1000, -> 1초마다 refetch
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // refetchOnReconnect: false,
    // refetchInterval: false,
  });
}
