import { ChangeEvent, InputHTMLAttributes, memo, useCallback } from "react";
import cls from "./Input.module.scss";
import classNames from "classnames";

interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLButtonElement>, "onChange"> {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  ["data-testid"]?: string;
}

export const Input = memo((props: IInputProps) => {
  const { className, value, onChange, ["data-testid"]: dataTestId } = props;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  return (
    <input
      type="text"
      className={classNames(cls.Input, {}, [className])}
      value={value}
      onChange={handleChange}
      data-testid={dataTestId}
    />
  );
});
