import { useMutation } from "@tanstack/react-query";
import { createTodo } from "@/api/create-todo.ts";

export function useCreateTodoMutation () {
  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {},
    onSettled: () => {},
    onSuccess: () => {
      window.location.reload();
    },
    onError: error => {
      window.alert(error.message);
    },
  });
}