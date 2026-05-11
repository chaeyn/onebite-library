import "./App.css";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ChefHat } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col">
      <ChefHat className="h-10 w-10 fill-red-500" />
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>집 갈래</DialogTitle>
            <DialogDescription>
              집 갈래집 갈래집 갈래 집 갈래 집 갈래 집 갈래 집 갈래 집 갈래 집 갈래 집 갈래 집 갈래{" "}
              집 갈래 집 갈래 집 갈래 집 갈래 집 갈래 집 갈래 집 갈래 집 갈래 집 갈래 집 갈래 집
              갈래 집 갈래
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Title</PopoverTitle>
            <PopoverDescription>Description text here.</PopoverDescription>
          </PopoverHeader>
          <PopoverHeader>
            <PopoverTitle>Title</PopoverTitle>
            <PopoverDescription>Description text here.</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>

      <Toaster position="top-center" />
      <div className="mx-40 w-60">
        <Carousel>
          <CarouselContent>
            {[1, 2, 3, 4, 5].map(value => (
              <CarouselItem key={value} className="basis-1/3">
                {value}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
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
    </div>
  );
}

export default App;
