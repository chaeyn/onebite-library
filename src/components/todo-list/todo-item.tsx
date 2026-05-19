import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router";
import type { Todo } from "@/types.ts";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation.ts";

export default function TodoItem({ id, content, isDone }: Todo) {
  const { mutate } = useUpdateTodoMutation();
  const handleDeleteClick = () => {};
  const handleCheckboxClick = () => {
    mutate({
      id: id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between rounded-md border p-2">
      <div className="flex gap-5">
        <input type="checkbox" checked={isDone} onClick={handleCheckboxClick} />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button onClick={handleDeleteClick} variant="destructive">
        삭제
      </Button>
    </div>
  );
}
