// #region
// #region ~ __IMPORT__
import { useState } from "react";
import { X } from "lucide-react";
// ~ style
import * as css from "./style.module.scss";
// #endregion ~ __IMPORT__

// #region ~ __COMPONENT__
export default function AuthPromo() {
  // ~ показывать полоску "подписаться?"
  const [isSing, setIsSing] = useState<boolean>(true);
  return (
    <>
      {/* sing */}
      {isSing && (
        <div className={css.wrapper} data-testid="singIncomp">
          <div className={css.__singIN}>
            <span>
              Sign up and get 20% off to your first order.{" "}
              <button>Sign Up Now</button>
            </span>
            <button
              onClick={() => {
                setIsSing(false);
              }}
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
