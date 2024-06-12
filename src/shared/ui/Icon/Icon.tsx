import { SVGProps, FC, memo } from "react";
import cls from "./Icon.module.scss";
import classNames from "classnames";

interface IIconProps {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IIconProps) => {
  const { className, Svg } = props;
  return <Svg className={classNames(cls.Icon, {}, [className])} />;
});
