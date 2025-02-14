import React, { useState } from "react";

interface Props {
  stepNum: string;
  stepTitle: string;
  stepDescription: string;
}

export default function ProcessStep(props: Props) {
  // ___ Props
  // #region
  const { stepNum, stepTitle, stepDescription } = props;
  // #endregion

  // ___ state
  // #region
  // ~ управление открытием карточки
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // #endregion

  return (
    <div className="test8__prStep__wrapper test8__prStep__wrapper--green">
      <div className="prStep__header">
        <div className="prStep__header__left">
          <p>{stepNum}</p>
          <h3>{stepTitle}</h3>
        </div>
        <div
          className="prStep__header__open"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span>{isOpen ? "+" : "-"}</span>
        </div>
      </div>

      <span className={isOpen ? "test8__prStep__wrapper--vissible" : ""}></span>

      <div
        className={
          isOpen
            ? "prStep__description test8__prStep__wrapper--vissible"
            : "prStep__description"
        }
      >
        {stepDescription}
      </div>
    </div>
  );
}
