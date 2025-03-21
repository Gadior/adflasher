import { Search, ShoppingCart, CircleUserRound } from "lucide-react";
// ~ comps
import Logotype from "../../../../Shared/ui/logotype/Logotype";
import DropdownMenu from "../DropdownMenu/dropdownMenu";
// ~ data
import { menuItems } from "../../Data/menu";
// ~ regux
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks";
import { setSearchValue } from "../../../../Redux/__slice/data";

// ~ styles
import * as css from "./styles.module.scss";

export default function WebMenu() {
  // _ __HOOKS__
  // #region
  const dispatch = useAppDispatch();
  // ~ значение поискового поля
  const searchValue = useAppSelector((state) => state.counter.searchValue);
  // #endregion

  return (
    <>
      {/* web */}
      <div className={css.container}>
        <div className={css.logoBlock}>
          <div className={css.logotype}>
            <Logotype />
          </div>
        </div>

        <div className={css.menu}>
          <DropdownMenu title="Shop" items={menuItems.shop} />
          <DropdownMenu title="On Sale" items={menuItems.on_Sale} />
          <DropdownMenu title="New Arivvles" items={menuItems.new_Arivvles} />
          <DropdownMenu title="Brands" items={menuItems.brands} />
        </div>
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
        </div>

        <div className={css.menuExtends}>
          <button>
            <ShoppingCart />
          </button>
          <button>
            <CircleUserRound />
          </button>
        </div>
      </div>
    </>
  );
}
