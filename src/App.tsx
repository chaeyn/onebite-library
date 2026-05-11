import "./App.css";
import { Button } from "@/components/ui/button.tsx";
import { cn } from "./lib/utils";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";
import { toast } from "sonner";

function App() {
  const isActive = true;

  return (
    <div className="flex flex-col">
      <Toaster position="top-center" />
      <div className="w-100 p-5">
        <Textarea value="hello" />
        <Input value="hello" />
      </div>

      <div className="flex">
        <Button
          onClick={() => {
            toast("toast", { position: "bottom-center" });
          }}
          variant="default"
        >
          버튼
        </Button>
        <Button variant="destructive">버튼</Button>
        <Button variant="ghost">버튼</Button>
        <Button variant="link">버튼</Button>
        <Button variant="outline">버튼</Button>
        <Button variant="secondary">버튼</Button>
      </div>

      <div>
        <div className={cn("w-10, text-lg", isActive ? "text-green-500" : "text-red-500")}>
          isActive
        </div>
        <div className="text-primary">Primary</div>
        <div className="text-muted">Muted</div>
        <div className="text-destructive">Destructive</div>
      </div>

      {/* 타이포그래피 */}
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm text-[rgb(100,30,200)]">text-sm</div>
      <div className="text-lg font-bold">text-lg</div>
      <div className="text-xl font-thin">text-xl</div>
      <div className="text-2xl font-extrabold">text-2xl</div>
      <div className="text-[13px] font-black">text-13px</div>

      {/* 백그라운드 컬러*/}
      <div className="bg-amber-500">amber-500</div>

      {/* 사이즈 */}
      <div className="w-20 bg-blue-500">box</div>
      <div className="w-[21.3px] bg-red-500">box</div>
      <div className="h-20 w-full bg-yellow-500">box</div>

      {/* 여백 */}
      <div className="mx-5 h-50 w-50 bg-red-400 pt-5 pr-5 pb-5">
        <div className="h-full w-full bg-blue-400 px-2">dd</div>
      </div>

      {/* 보더 */}
      <div className="m-5 rounded-3xl border-x-2 border-y border-red-500">border</div>

      {/* flex 컨테이너*/}
      <div className="flex items-start justify-evenly">
        <div className="h-10 w-10 flex-1 border">a</div>
        <div className="h-20 w-10 flex-2 border">b</div>
        <div className="h-30 w-10 flex-3 border">c</div>
        <div className="h-40 w-10 flex-4 border">d</div>
      </div>
    </div>
  );
}

export default App;
