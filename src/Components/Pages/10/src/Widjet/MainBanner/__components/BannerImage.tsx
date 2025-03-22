// ~ assets
import __bannerImage from "../../../Shared/assets/__bannerImage1.jpg";

interface Props {
  alt: string;
}
export default function BannerImage(props: Props) {
  const { alt } = props;
  return <img src={__bannerImage} alt={alt} style={{ height: "100%" }} />;
}
