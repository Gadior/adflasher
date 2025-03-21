// #region
// #region __IMPORT__
// ~
import { X } from "lucide-react";
// ~ styles
import * as css from "./styles.module.scss";
// ~ regux
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks";
import { closeBurger } from "../../../../Redux/__slice/data";
// ~ data
// import menu from '../../Data/menu'
// #endregion __IMPORT__

// #region ___COMP__
export default function BurgerClickView() {
  // _ __HOOKS__
  // #region
  const dispatch = useAppDispatch();
  // ~ значение поискового поля
  const isburgerClick = useAppSelector((state) => state.counter.isburgerClick);
  console.log(isburgerClick);
  // #endregion

  return (
    <>
      {isburgerClick && (
        <div className={css.wrapper}>
          <button
            onClick={() => {
              dispatch(closeBurger());
            }}
          >
            <X className="" />
          </button>
          <div>
            <div>dasas</div>
            <div>dasas</div>
            <div>dasas</div>
            <div>dasas</div>
          </div>
        </div>
      )}
    </>
  );
}
// #endregion ___COMP__
// #endregion
