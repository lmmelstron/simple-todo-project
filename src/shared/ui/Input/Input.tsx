import {
  InputHTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import cls from "./Input.module.scss";
import classNames from "classnames";

interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLButtonElement>, "onSubmit"> {
  className?: string;
  ["data-testid"]?: string;
  onSubmit?: (value: string) => void;
}

export const Input = memo((props: IInputProps) => {
  const { className, ["data-testid"]: dataTestId, onSubmit } = props;
  const ref = useRef<HTMLInputElement>(null);

  const onKeyDown = useCallback(
    async (e: KeyboardEvent) => {
      if (e.key === "Enter" && ref.current?.value) {
        onSubmit?.(ref.current?.value);
        ref.current.value = "";
      }
    },
    [onSubmit]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <input
      ref={ref}
      type="text"
      className={classNames(cls.Input, {}, [className])}
      placeholder="What needs to be done?"
      data-testid={dataTestId}
    />
  );
});
