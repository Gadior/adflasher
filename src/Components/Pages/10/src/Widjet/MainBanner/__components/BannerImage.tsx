// ~ assets
import __bannerImageWebp from "../../../Shared/assets/__bannerImage1.webp";

interface Props {
  alt: string;
}
export default function BannerImage(props: Props) {
  const { alt } = props;
  return (
    // <picture>
    //   <source srcSet={__bannerImageWebp} type="image/webp" />
    //   <img src={__bannerImage} alt="Description" />
    // </picture>
    <img
      src={__bannerImageWebp}
      alt={alt}
      style={{ height: "100%" }}
      loading="lazy"
    />
  );
}
