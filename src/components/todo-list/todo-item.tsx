import { Button } from "@/components/ui/button.tsx";
import { useDeleteTodo } from "@/store/todos.ts";
import { Link } from "react-router";

interface TodoItemProps {
  id: number;
  content: string;
}

export default function TodoItem({ id, content }: TodoItemProps) {
  const deleteTodo = useDeleteTodo();

  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  return (
    <div className="flex items-center justify-between rounded-md border p-2">
      <Link to={`/todolist/${id}`}>{content}</Link>
      <Button onClick={handleDeleteClick} variant="destructive">
        삭제
      </Button>
    </div>
  );
}
