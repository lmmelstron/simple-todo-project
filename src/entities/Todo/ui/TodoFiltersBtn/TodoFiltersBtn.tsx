import { TodoStatus } from "@entities/Todo/consts/consts";
import { Button } from "@shared/ui/Button/Button";
import { memo, useCallback } from "react";

interface ITodoFiltersBtnProps {
  option: TodoStatus;
  dataTestid?: string;
  onFilterChange?: (value: TodoStatus) => void;
  disabled?: boolean;
  active?: boolean;
}

export const TodosFiltersBtn = memo((props: ITodoFiltersBtnProps) => {
  const { option, disabled, active, dataTestid, onFilterChange } = props;

  const handleChange = useCallback(() => {
    onFilterChange?.(option);
  }, [onFilterChange, option]);

  return (
    <Button
      data-testid={dataTestid}
      key={option}
      onClick={handleChange}
      disabled={disabled}
      active={active}
    >
      {option}
    </Button>
  );
});
