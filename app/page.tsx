import TodoContextProvider from "@/components/todo-context";
import TodoForm from "@/components/todo-form";
import { TodoTable } from "@/components/todo-table";
import { createClient } from "@supabase/supabase-js";

export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data: todos, error } = await supabase.from("todos").select("*");
  if (error) {
    console.error("Error fetching todos:", error);
  }
  return (
    <div className="container mx-auto max-w-2xl p-4">
      <TodoContextProvider todosFromSupabase={todos || []}>
        <TodoForm />
        <TodoTable />
      </TodoContextProvider>
    </div>
  );
}
