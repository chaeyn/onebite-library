import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router";
import type { Todo } from "@/types.ts";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation.ts";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation.ts";

export default function TodoItem({ id, content, isDone }: Todo) {
  const { mutate: updateTodo } = useUpdateTodoMutation();
  const { mutate: deleteTodo, isPending: isDeleteTodoPending } = useDeleteTodoMutation();

  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  const handleCheckboxClick = () => {
    updateTodo({
      id: id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between rounded-md border p-2">
      <div className="flex gap-5">
        <input
          type="checkbox"
          checked={isDone}
          onClick={handleCheckboxClick}
          disabled={isDeleteTodoPending}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button onClick={handleDeleteClick} disabled={isDeleteTodoPending} variant="destructive">
        삭제
      </Button>
    </div>
  );
}
