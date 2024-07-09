import { memo } from "react";
import cls from "./AddTodo.module.scss";
import { Input } from "@shared/ui/Input/Input";
import classNames from "classnames";

import ChevronIcon from "@shared/assets/icons/chevron-down.svg";
import { Icon } from "@shared/ui/Icon/Icon";

interface IAddTodoProps {
  className?: string;
  addTodo: (name: string) => void;
}

export const AddTodo = memo((props: IAddTodoProps) => {
  const { className, addTodo } = props;

  return (
    <section className={classNames(cls.AddTodo, className)}>
      <Icon Svg={ChevronIcon} />
      <Input
        placeholder="Input new todo.."
        data-testid="add-todo-input"
        onSubmit={addTodo}
      />
    </section>
  );
});
