import { ButtonHTMLAttributes, ReactNode, memo } from "react";
import cls from "./Button.module.scss";
import classNames from "classnames";

interface IButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  active?: boolean;
}

export const Button = memo((props: IButtonsProps) => {
  const { className, children, disabled, active, ...otherProps } = props;
  return (
    <button
      className={classNames(
        cls.Button,
        disabled && cls.disabled,
        active && cls.active,
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
});
