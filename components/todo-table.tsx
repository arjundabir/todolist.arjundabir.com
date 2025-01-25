"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useContext } from "react";
import { TodoContext } from "./todo-context";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { XIcon } from "lucide-react";

export function TodoTable() {
  const { todos, setTodos } = useContext(TodoContext);

  const handleDelete = async (todo: string) => {
    const response = await fetch(`/api/todo`, {
      method: "DELETE",
      body: JSON.stringify({ todo }),
    });
    if (response.ok) {
      setTodos(todos.filter((t) => t !== todo));
    }
  };
  return (
    <Table>
      <TableCaption>A list of your todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10" />
          <TableHead className="w-[100px]">Todo</TableHead>
          <TableHead className="w-10" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo}>
            <TableCell className="w-fit">
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium">{todo}</TableCell>
            <TableCell
              className="text-right"
              onClick={() => handleDelete(todo)}
            >
              <Button variant="ghost" size="icon">
                <XIcon className="w-4 h-4 text-destructive" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
