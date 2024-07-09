import { memo } from "react";
import classNames from "classnames";
import { TodoStatus, TodoStatusFilters } from "@entities/Todo";
import { Button } from "@shared/ui/Button/Button";
import cls from "./TodoFilters.module.scss";
import { TodosFiltersBtn } from "../TodoFiltersBtn/TodoFiltersBtn";

interface ITodoFiltersProps {
  className?: string;
  count?: number;
  filter: TodoStatus;
  onChangeFilter?: (filter: TodoStatus) => void;
  clearCompleted?: () => void;
}

export const TodoFilters = memo((props: ITodoFiltersProps) => {
  const { className, count, filter, onChangeFilter, clearCompleted } = props;

  return (
    <section className={classNames(cls.TodosFilters, [className])}>
      <span data-testid="count">{count} tasks left</span>
      <div className={cls.Filters}>
        {TodoStatusFilters.map((option) => (
          <TodosFiltersBtn
            dataTestid={`filter-${option}`}
            key={option}
            onFilterChange={onChangeFilter}
            disabled={option === filter}
            active={option === filter}
            option={option}
          />
        ))}
      </div>
      <Button data-testid="btn-clear" onClick={clearCompleted}>
        Clear completed
      </Button>
    </section>
  );
});
