"use client";
import React, { createContext, useState } from "react";

export const TodoContext = createContext({
  todos: [] as string[],
  setTodos: (todo: string[]) => {
    console.log(todo);
  },
});

const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<string[]>([]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
