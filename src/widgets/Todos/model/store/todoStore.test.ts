import { describe, expect, it } from "vitest";
import { TodosStore } from "./todosStore";
import { exampleTodos, TodoStatus } from "@entities/Todo";

describe("store actions", () => {
  it("check empty initial state", () => {
    const store = new TodosStore();
    const { filter, todos } = store;

    expect(todos).not.toBeUndefined();
    expect(todos).not.toBeNull();
    expect(todos).toEqual([]);
    expect(filter).toEqual(TodoStatus.ALL);
    expect(store.displayedTodos.length).toEqual(0);
    expect(store.activeTodosCount).toEqual(0);
  });

  it("check filled initial state", () => {
    const store = new TodosStore(exampleTodos);

    expect(store.filter).toEqual(TodoStatus.ALL);
    expect(store.todos.length).toEqual(5);
    expect(store.displayedTodos.length).toEqual(5);
    expect(store.activeTodosCount).toEqual(3);
  });

  it("add todo", async () => {
    const store = new TodosStore();
    const { todos, addTodo } = store;
    expect(todos).toEqual([]);
    expect(store.activeTodosCount).toEqual(0);
    addTodo("1st todo");
    expect(todos.length).toEqual(1);
    expect(store.activeTodosCount).toEqual(1);
  });

  it("toggle status", () => {
    const store = new TodosStore([
      { id: "1", value: "First todo", completed: false },
    ]);
    expect(store.todos[0].completed).toEqual(false);
    expect(store.activeTodosCount).toEqual(1);
    store.toggleStatus("1");
    expect(store.todos[0].completed).toEqual(true);
    expect(store.activeTodosCount).toEqual(0);
  });

  it("toggle status to completed with active filter", () => {
    const store = new TodosStore([
      { id: "1", value: "First todo", completed: false },
    ]);
    expect(store.activeTodosCount).toEqual(1);
    store.toggleStatus("1");
    expect(store.activeTodosCount).toEqual(0);
  });

  it("change filter to all", () => {
    const store = new TodosStore(exampleTodos);
    expect(store.displayedTodos.length).toEqual(5);
    store.changeFilter(TodoStatus.ALL);
    expect(store.displayedTodos.length).toEqual(5);
  });

  it("change filter to active", () => {
    const store = new TodosStore(exampleTodos);
    expect(store.displayedTodos.length).toEqual(5);
    store.changeFilter(TodoStatus.ACTIVE);
    expect(store.displayedTodos.length).toEqual(3);
  });

  it("change filter to completed", () => {
    const store = new TodosStore(exampleTodos);
    expect(store.displayedTodos.length).toEqual(5);
    store.changeFilter(TodoStatus.COMPLETED);
    expect(store.displayedTodos.length).toEqual(2);
  });

  it("clear completed todos", () => {
    const store = new TodosStore(exampleTodos);

    expect(store.displayedTodos.length).toEqual(5);
    expect(store.todos.length).toEqual(5);
    store.clearCompleted();
    expect(store.displayedTodos.length).toEqual(3);
    expect(store.todos.length).toEqual(3);
  });
});
