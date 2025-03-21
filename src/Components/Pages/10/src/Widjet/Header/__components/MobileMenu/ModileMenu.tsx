// #region
// #region __IMPORT__
// ~
import { useState } from "react";
import { CircleUserRound, Menu, Search, ShoppingCart, X } from "lucide-react";
// ~ comps
import Logotype from "../../../../Shared/ui/logotype/Logotype";
// ~ styles
import * as css from "./styles.module.scss";
// ~ regux
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks";
import { setSearchValue, openBurger } from "../../../../Redux/__slice/data";
// #endregion __IMPORT__

// #region ___COMP__
export default function ModileMenu() {
  // _ __HOOKS__
  // #region
  const dispatch = useAppDispatch();
  const [isSeacrh, setIsSearch] = useState<boolean>(false);
  // ~ значение поискового поля
  const searchValue = useAppSelector((state) => state.counter.searchValue);

  // #endregion

  return (
    <div className={css.container}>
      {/* base view */}
      {!isSeacrh && (
        <>
          <div className={css.logoBlock}>
            <button
              onClick={() => {
                dispatch(openBurger());
              }}
            >
              <Menu />
            </button>
            <div className={css.logotype}>
              <Logotype />
            </div>
          </div>

          <div className={css.menuExtends}>
            <button
              onClick={() => {
                setIsSearch(true);
              }}
            >
              <Search />
            </button>
            <button>
              <ShoppingCart />
            </button>
            <button>
              <CircleUserRound />
            </button>
          </div>
        </>
      )}

      {/* search view */}
      {isSeacrh && (
        <div className={css.search}>
          <input
            placeholder="Search for products..."
            value={searchValue}
            onChange={(e) => {
              dispatch(setSearchValue({ value: e.target.value }));
            }}
          />
          <span className={css.icon}>
            <Search />
          </span>
          <button
            className={css.closeIcon}
            onClick={() => {
              setIsSearch(false);
              dispatch(setSearchValue({ value: "" }));
            }}
          >
            <X />
          </button>
        </div>
      )}
    </div>
  );
}
// #endregion ___COMP__
// #endregion
