/// <reference types="react-scripts" />

declare module "*.module.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

// Блок переменных. Для подключения dev tools в проекте
declare const __PLATFOMR__: "mobile" | "desktop";
declare const __ISDEV__: "development" | "production";

declare module "*.png";
declare module "*.jpg";

declare module "*.svg" {
  import React = require("react");
  const src: React.FC<React.SVGProps<SVGSVGElement>>;
  export default src;
}
