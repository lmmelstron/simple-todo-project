import { useCallback } from "react";
import cls from "./TodoList.module.scss";
import classNames from "classnames";
import { ITodo } from "../../model/types/todo";
import { TodoItem } from "../TodoItem/TodoItem";

interface ITodoListProps {
  className?: string;
  todos?: ITodo[];
  onTodoClick?: (value: ITodo) => void;
}

export const TodoList = (props: ITodoListProps) => {
  const { className, todos = [], onTodoClick } = props;

  const clickHandle = useCallback(
    (todo: ITodo) => () => onTodoClick?.(todo),
    [onTodoClick]
  );

  const renderTodo = (todo: ITodo) => (
    <TodoItem
      key={todo.id}
      completed={todo.completed}
      onClick={clickHandle(todo)}
    >
      {todo.value}
    </TodoItem>
  );

  return (
    <ul className={classNames(cls.TodoList, {}, [className])}>
      {todos.map(renderTodo)}
    </ul>
  );
};
