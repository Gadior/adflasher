import React from "react";
import { MoveUpRight } from "lucide-react";

// Что придет?
interface Props {
  cardType: string;
  text: string[];
  url: string;
  image: string;
  imageTitle: string;
}
function Article(props: Props) {
  // Подключение
  const { cardType, text, url, image, imageTitle } = props;

  // ___ styles
  // #region
  let cardTheme = "test8__article__card ";
  let linkTheme = "test8__article__block__link ";
  let h3Theme = "";
  let arrowTheme = "";
  let urlTextTheme = "";

  switch (cardType) {
    case "dark":
      cardTheme = cardTheme + "__darkTheme " + " __darkColor";
      h3Theme = "__whiteTheme";
      arrowTheme = "__whiteTheme";
      urlTextTheme = "__whiteColor --urlWhiteTheme";
      break;
    case "white":
      cardTheme = cardTheme + "__whiteTheme " + " __whiteColor";
      h3Theme = "__greenTheme" + " __darkColor";
      arrowTheme = "__darkTheme";
      urlTextTheme = "__darkColor --urlDarkTheme";
      break;
    case "green":
      cardTheme = cardTheme + " __greenTheme  __whiteColor";
      h3Theme = "__whiteTheme" + " __darkColor";
      arrowTheme = "__darkTheme";
      urlTextTheme = "__darkColor --urlDarkTheme";
      break;
    default:
      cardTheme = cardTheme + "__darkTheme ";
      h3Theme = "__whiteTheme";
      arrowTheme = "__whiteTheme";
      urlTextTheme = urlTextTheme + "--urlWhiteTheme";
      break;
  }
  // #endregion

  return (
    <article className={cardTheme}>
      <div className="test8__article__card__left">
        <div>
          {text.map((txt) => (
            <h3
              key={Date.now() - Math.floor(Math.random() * 1000)}
              className={h3Theme}
            >
              {txt}
            </h3>
          ))}
        </div>

        <div className={linkTheme}>
          <div className={arrowTheme}>
            <MoveUpRight />
          </div>

          <a href={url} className={urlTextTheme}>
            learn more...
          </a>
        </div>
      </div>
      <img src={image} title={imageTitle}></img>
    </article>
  );
}

export default Article;
