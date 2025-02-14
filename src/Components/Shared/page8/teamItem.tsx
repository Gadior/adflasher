import React from "react";

interface Props {
  itemPic: string;
  itemName: string;
  itemJob: string;
  itemDescription: string;
}

export default function TeamItem(props: Props) {
  // ___ Props
  // #region
  const { itemPic, itemName, itemJob, itemDescription } = props;
  // #endregion

  return (
    <div className="teamBlock__wrapper__card">
      <div className="teamBlock__card__ln">
        <a href="#">in</a>
      </div>
      <div className="teamBlock__card__header">
        <img src={itemPic} alt={itemName} />
        <div className="header__col">
          <span>{itemName}</span>
          <span>{itemJob}</span>
        </div>
      </div>

      <span></span>

      <div className="teamBlock__card__footer">{itemDescription}</div>
    </div>
  );
}
