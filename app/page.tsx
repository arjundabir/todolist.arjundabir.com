import TodoContextProvider from "@/components/todo-context";
import TodoForm from "@/components/todo-form";
import { TodoTable } from "@/components/todo-table";

export default function Home() {
  return (
    <div className="container mx-auto max-w-2xl p-4">
      <TodoContextProvider>
        <TodoForm />
        <TodoTable />
      </TodoContextProvider>
    </div>
  );
}
