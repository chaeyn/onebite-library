import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "@/api/delete-todo.ts";
import { QUERY_KEYS } from "@/lib/constants.ts";
import type { Todo } from "@/types.ts";

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,

    // 1. 캐시 무효 -> invalidateQueries
    // 2. 수정 요청의 응답갑 활용 -> onSuccess
    // 3. 낙관적 업데이트 -> onMutate

    onSuccess: deletedTodo => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, prevTodos => {
        if (!prevTodos) return [];
        return prevTodos.filter(prevTodo => prevTodo.id !== deletedTodo.id);
      });
    },
  });
}
