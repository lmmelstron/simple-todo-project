import cls from "./Todos.module.scss";
import classNames from "classnames";
import { AddTodo, TodoList, TodoFilters } from "@entities/Todo";
import { observer } from "mobx-react";
import { useStore } from "@app/providers/StoreProvider";

export const Todos = observer(() => {
  const todosStore = useStore();
  const {
    filter,
    changeFilter,
    clearCompleted,
    toggleStatus,
    displayedTodos,
    activeTodosCount,
    addTodo,
  } = todosStore;

  return (
    <article className={classNames(cls.Todos)}>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={displayedTodos} onTodoClick={toggleStatus} />
      <TodoFilters
        className={cls.filters}
        count={activeTodosCount}
        filter={filter}
        onChangeFilter={changeFilter}
        clearCompleted={clearCompleted}
      />
    </article>
  );
});
