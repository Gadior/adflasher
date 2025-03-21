import { Search, ShoppingCart, CircleUserRound } from "lucide-react";
// ~ comps
import Logotype from "../../../../Shared/ui/logotype/Logotype";
import DropdownMenu from "../DropdownMenu/dropdownMenu";
// ~ data
import { menuItems } from "../../Data/menu";

// ~ styles
import * as css from "./styles.module.scss";

export default function WebMenu() {
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
          <input placeholder="Search for products..." />
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
