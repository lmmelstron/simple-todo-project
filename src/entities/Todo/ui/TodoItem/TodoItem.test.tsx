import { render, screen } from "@testing-library/react";
import { TodoItem } from "./TodoItem";
import { describe, expect, it } from "vitest";

describe("TodoItem tests", () => {
  it("new todo", () => {
    render(<TodoItem completed={false}>Issue</TodoItem>);

    const item = screen.getByTestId("todo-item");
    expect(item).toBeInTheDocument();
    expect(item).not.toHaveClass(/completed/);

    expect(screen.getByTestId("todo-item-text")).toHaveTextContent("Issue");
  });

  it("completed todo", () => {
    render(<TodoItem completed={true}>Issue</TodoItem>);

    const item = screen.getByTestId("todo-item");
    expect(item).toHaveClass(/completed/);
  });
});
