// ~ assets
import __bannerImageWebp from "../../../Shared/assets/__bannerImage1.webp";

interface Props {
  alt: string;
}
export default function BannerImage(props: Props) {
  const { alt } = props;
  return <img src={__bannerImageWebp} alt={alt} height="100%" loading="lazy" />;
}
