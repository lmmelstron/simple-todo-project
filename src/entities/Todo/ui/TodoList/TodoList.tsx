import cls from "./TodoList.module.scss";
import classNames from "classnames";
import { ITodo } from "../../model/types/todo";
import { TodoItem } from "../TodoItem/TodoItem";

interface ITodoListProps {
  className?: string;
  todos?: ITodo[];
  onTodoClick?: (id: string) => void;
}

export const TodoList = (props: ITodoListProps) => {
  const { className, todos = [], onTodoClick } = props;

  const renderTodo = (todo: ITodo) => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      completed={todo.completed}
      onClick={onTodoClick}
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
