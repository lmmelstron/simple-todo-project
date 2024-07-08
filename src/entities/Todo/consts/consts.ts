import { ITodo } from "../model/types/todo";

export enum TodoStatus {
  "ALL" = "ALL",
  "COMPLETED" = "COMPLETED",
  "ACTIVE" = "ACTIVE",
}

export const exampleTodos: ITodo[] = [
  { id: "1", value: "First todo", completed: false },
  { id: "2", value: "Second todo", completed: true },
  { id: "3", value: "Third todo", completed: false },
  { id: "4", value: "Fourth todo", completed: true },
  { id: "5", value: "Fifth todo", completed: false },
];

export const TodoStatusFilters = Object.values(TodoStatus);
