import { memo, ReactNode, useCallback } from "react";
import cls from "./TodoItem.module.scss";
import classNames from "classnames";
import { Icon } from "@shared/ui/Icon/Icon";

import CircleIcon from "@shared/assets/icons/circle-20-20.svg";
import CircleCheckIcon from "@shared/assets/icons/circle-check-20-20.svg";

interface ITodoItemProps {
  className?: string;
  id: string;
  completed: boolean;
  children: ReactNode;
  onClick?: (id: string) => void;
}

export const TodoItem = memo((props: ITodoItemProps) => {
  const { className, id, children, completed, onClick } = props;

  const handleClick = useCallback(() => onClick?.(id), [id, onClick]);

  return (
    <li
      data-testid="todo-item"
      onClick={handleClick}
      className={classNames(
        cls.TodoItem,
        [className],
        completed && cls.completed
      )}
    >
      <Icon
        className={cls.marker}
        Svg={completed ? CircleCheckIcon : CircleIcon}
      />
      <span
        data-testid="todo-item-text"
        // className={classNames(completed && cls.COMPLETED)}
      >
        {children}
      </span>
    </li>
  );
});
