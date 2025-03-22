// #region
// #region __IMPORT
// ~
// ~ comps
import BannerImage from "./__components/BannerImage";
// ~ styles
import * as css from "./styles/styles.module.scss";
// #endregion __IMPORT

// #region __COMPONENT__
export default function MainBanner() {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.bannerImage}>
          <BannerImage alt={"FIND CLOTHES THAT MATCHES YOUR STYLE"} />
        </div>
        <div className={css.leftSide}>
          <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className={css.btnWrapper}>
            <button className={css.mainBtn}>Shop Now</button>
          </div>
          <div className={css.cards}>
            <div className={css.card}>
              <h3>200+</h3>
              <div>International Brands</div>
            </div>
            <div className={css.card}>
              <h3>2 000+</h3>
              <div>High-Quality Products</div>
            </div>
            <div className={css.card}>
              <h3>30 000+</h3>
              <div>Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// #endregion __COMPONENT__
// #endregion
