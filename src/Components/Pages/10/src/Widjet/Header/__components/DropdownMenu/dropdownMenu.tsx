import React, { useState } from "react";
import * as css from "./styles.module.scss";
export default function DropdownMenu(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={css.dropdown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span>{props.title}</span>
      {isOpen && (
        <div>
          {props.items.map((item: any, index: any) => (
            <a key={index} href={item.link}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
