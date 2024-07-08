import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Todos } from "./Todos";
import { TodosStore } from "@widgets/Todos/model/store/todosStore";
import { StoreContext } from "@app/providers/StoreProvider";
import { exampleTodos } from "@entities/Todo";

const renderWithStore = (todoStore: TodosStore) =>
  render(
    <StoreContext.Provider value={todoStore}>
      <Todos />
    </StoreContext.Provider>
  );

describe("Todos tests", () => {
  it("render", () => {
    const todoStore = new TodosStore();
    const { getByTestId } = renderWithStore(todoStore);

    const count = getByTestId("count");
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent(/0/);

    expect(getByTestId("add-todo-input")).toHaveValue("");

    const filterALL = getByTestId("filter-ALL");
    expect(filterALL).toHaveClass(/active/);
  });

  it("add todo", () => {
    const todoStore = new TodosStore();
    const { getByTestId } = renderWithStore(todoStore);
    const input = getByTestId("add-todo-input");
    expect(getByTestId("count")).toHaveTextContent(/0/);
    expect(input).toHaveValue("");
    const value = "1st todo";
    fireEvent.change(input, {
      target: {
        value,
      },
    });
    expect(input).toHaveValue(value);
    fireEvent.click(getByTestId("add-todo-btn"));

    expect(getByTestId("todo-item")).toBeInTheDocument();
    expect(getByTestId("todo-item-text")).toHaveTextContent(value);
    expect(getByTestId("count")).toHaveTextContent(/1/);
  });

  it("change filter value", () => {
    const todoStore = new TodosStore(exampleTodos);
    const { getByTestId, getAllByTestId } = renderWithStore(todoStore);

    expect(getAllByTestId("todo-item").length).toBe(5);

    fireEvent.click(getByTestId("filter-COMPLETED"));
    expect(getAllByTestId("todo-item").length).toBe(2);

    fireEvent.click(getByTestId("filter-ACTIVE"));
    expect(getAllByTestId("todo-item").length).toBe(3);
  });

  it("clear completed todos", () => {
    const todoStore = new TodosStore(exampleTodos);
    const { getByTestId, getAllByTestId } = renderWithStore(todoStore);

    expect(getAllByTestId("todo-item").length).toBe(5);
    fireEvent.click(getByTestId("btn-clear"));
    expect(getAllByTestId("todo-item").length).toBe(3);
  });
});
