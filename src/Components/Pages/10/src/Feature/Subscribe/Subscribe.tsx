// #region
// #region ~ __IMPORT__
// ~
import { useState } from "react";
// ~ style
import * as css from "./style.module.scss";
// ~ redux
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setSubscribeValue, changeIsMail } from "../../Redux/__slice/data";
// ~ validator
import { validateEmail } from "../../Shared/help/help";
// #endregion ~ __IMPORT__

// #region ~ __COMPONENT__
export default function Subscribe() {
  // _ __HOOKS__
  // #region ~ __HOOKS__
  const dispatch = useAppDispatch();
  // ~ значение поискового поля
  const subScribeValue = useAppSelector(
    (state) => state.counter.subscribeValue
  );
  const isMail = useAppSelector((state) => state.counter.isMail);
  // #endregion ~ __HOOKS__

  // _ __FIELD VALIDASTION__
  // #region ~ __FIELD VALIDASTION__
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const validateField = (): Boolean => {
    let newErrors: Record<string, boolean> = {
      email: !subScribeValue.toString().trim(),
    };

    // email
    if (!newErrors.email) {
      if (!validateEmail(subScribeValue)) {
        newErrors = { ...newErrors, email: true };
      }
    }

    setErrors(newErrors);
    setTimeout(() => setErrors({}), 500);
    return !Object.values(newErrors).includes(true);
  };
  // #endregion ~ __FIELD VALIDASTION__

  return (
    <div className={css.wrapper}>
      {/* <div className={css.whiteBG}></div>
      <div className={css.greyBG}></div> */}
      <div className={css.subscribe} data-testid="subscribe">
        <h3>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
        <div className={css.form}>
          {!isMail ? (
            <>
              <input
                placeholder="Enter your email address"
                className={errors.email ? css.error : ""}
                value={subScribeValue}
                onChange={(e) => {
                  dispatch(setSubscribeValue({ value: e.target.value }));
                }}
              />
              <button
                onClick={() => {
                  if (!validateField()) {
                    return;
                  }
                  dispatch(changeIsMail({ value: true }));
                  dispatch(setSubscribeValue({ value: "" }));
                  setTimeout(() => {
                    dispatch(changeIsMail({ value: false }));
                  }, 3000);
                }}
              >
                Subscribe to Newsletter
              </button>
            </>
          ) : (
            <div className={css.sendEmail}>Email saved!</div>
          )}
        </div>
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
