import { Button } from "@/components/ui/button.tsx";

interface TodoItemProps {
  id: number;
  content: string;
}

export default function TodoItem({ id, content }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between rounded-md border p-2">
      {content}
      <Button variant="destructive">삭제</Button>
    </div>
  );
}
