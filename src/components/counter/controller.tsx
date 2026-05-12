import { Button } from "@/components/ui/button.tsx";
import { useDecreaseCount, useIncreaseCount } from "@/store/count.ts";

export default function Controller() {
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
