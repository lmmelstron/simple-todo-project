// declaration.d.ts

declare module "@shared/assets/icons/*.svg" {
  // @ts-expect-error @ts-ignore next-line
  import { FC } from "react";

  const SVG: FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
