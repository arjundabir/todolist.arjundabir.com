"use client";
import React, { createContext, useState } from "react";
import { Todo } from "@/types/todo";

interface TodoContextProps {
  todosFromSupabase: Todo[];
  children: React.ReactNode;
}

interface TodoContextType {
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: (todo: Todo[]) => {
    console.log(todo);
  },
});

const TodoContextProvider = ({
  children,
  todosFromSupabase,
}: TodoContextProps) => {
  const [todos, setTodos] = useState<Todo[]>(todosFromSupabase);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
