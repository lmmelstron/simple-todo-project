import { memo, useCallback, useMemo } from "react";
import classNames from "classnames";
import { TodoStatus, TodoStatusFilters } from "@entities/Todo";
import { Button } from "@shared/ui/Button/Button";
import cls from "./TodoFilters.module.scss";

interface ITodosFiltersProps {
  className?: string;
  count?: number;
  filter: TodoStatus;
  onChangeFilter?: (filter: TodoStatus) => void;
}

export const TodosFilters = memo((props: ITodosFiltersProps) => {
  const { className, count, filter, onChangeFilter } = props;

  const clickHandle = useCallback(
    (value: TodoStatus) => () => onChangeFilter?.(value),
    [onChangeFilter]
  );

  const filterBtns = useMemo(
    () => (
      <div className={cls.Filters}>
        {TodoStatusFilters.map((option) => (
          <Button
            data-testid={`filter-${option}`}
            key={option}
            onClick={clickHandle(option)}
            disabled={option === filter}
            active={option === filter}
          >
            {option}
          </Button>
        ))}
      </div>
    ),
    [clickHandle, filter]
  );

  return (
    <section className={classNames(cls.TodosFilters, [className])}>
      <span data-testid="count">Tasks left: {count}</span>
      {filterBtns}
    </section>
  );
});
