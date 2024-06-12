import { memo, useCallback, useState } from "react";
import cls from "./AddTodo.module.scss";
import { Input } from "@shared/ui/Input/Input";
import classNames from "classnames";
import { Button } from "@shared/ui/Button/Button";

interface IAddTodoProps {
  className?: string;
  addTodo: (name: string) => void;
}

export const AddTodo = memo((props: IAddTodoProps) => {
  const { className, addTodo } = props;
  const [name, setName] = useState<string>("");

  const handleAddTodo = useCallback(() => {
    addTodo(name);
    setName("");
  }, [addTodo, name]);

  return (
    <section className={classNames(cls.AddTodo, {}, [className])}>
      <Input
        placeholder="Input new todo.."
        value={name}
        onChange={setName}
        data-testid="add-todo-input"
      />
      <Button
        onClick={handleAddTodo}
        className={cls.addTodoBtn}
        data-testid="add-todo-btn"
      >
        Add
      </Button>
    </section>
  );
});
