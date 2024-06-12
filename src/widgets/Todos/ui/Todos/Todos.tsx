import cls from "./Todos.module.scss";
import classNames from "classnames";
import { AddTodo, TodoList, TodosFilters } from "@entities/Todo";
import { observer } from "mobx-react";
import { useStore } from "@app/providers/StoreProvider";

export const Todos = observer(() => {
  const todosStore = useStore();
  const {
    filter,
    changeFilter,
    toggleStatus,
    displayedTodos,
    unfinishedTodosCount,
    addTodo,
  } = todosStore;

  return (
    <article className={classNames(cls.Todos)}>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={displayedTodos} onTodoClick={toggleStatus} />
      <TodosFilters
        className={cls.filters}
        count={unfinishedTodosCount}
        filter={filter}
        onChangeFilter={changeFilter}
      />
    </article>
  );
});
