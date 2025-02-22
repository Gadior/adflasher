import React, { useState } from "react";
import "./dropdownMenu.css";
export default function DropdownMenu(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="page10--dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="page10--dropdown-trigger">{props.title}</span>
      {isOpen && (
        <div className="page10--dropdown-content">
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
