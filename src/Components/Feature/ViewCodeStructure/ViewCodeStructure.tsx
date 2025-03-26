// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
// ~ comps
import ViewStructureBtn from "./__components/ViewStructureBtn/ViewStructureBtn";
import CloseViewStructureBtn from "./__components/CloseViewStructureBtn/CloseViewStructureBtn";
import StructurePanel from "./__components/StructurePanel/StructurePanel";

// ~ redux
import { useAppSelector } from "../../Pages/10/src/Redux/hooks";

// ~ assets
import _1 from "../../Pages/10/src/Shared/assets/__ar1.jpg";
import _2 from "../../Pages/10/src/Shared/assets/__ar2.jpg";
import _3 from "../../Pages/10/src/Shared/assets/__ar3.jpg";
import _4 from "../../Pages/10/src/Shared/assets/__ar4.jpg";
// #endregion ~ __IMPORT__

const __data = [
  {
    id: 0,
    name: "Main",
    description:
      "Архитектура сайта построена по передовому принципу Feature-Sliced Design (FSD), что обеспечивает максимальную гибкость, масштабируемость и удобство разработки. Благодаря единому контекстному пространству навигация по сайту интуйтивно понятна: вы легко найдёте нужные категории, акции и новинки, а адаптивный дизайн гарантирует комфортный просмотр с любого устройства.",
    content: [
      {
        id: 0,
        title: "",
        description: "- Реализация - React + Typescript + css modules (sccs)",
        slides: [],
      },
      { id: 1, title: "", description: "- Стейт менеджер - Redux", slides: [] },
      {
        id: 2,
        title: "",
        description: "- Структура проекта - FSD",
        slides: [],
      },
      {
        id: 3,
        title: "",
        description: "- Дополнительные модули - Webpack",
        slides: [],
      },
      {
        id: 4,
        title: "",
        description: "- Тестирование - JEST, React Testing Lib",
        slides: [],
      },
    ],
  },
  { id: 1, name: "Структура", description: "d1", content: [] },
  { id: 2, name: "Redux", description: "d2", content: [] },
  { id: 3, name: "Тестирование", description: "d3", content: [] },
  { id: 4, name: "Webpack", description: "d4", content: [] },
  { id: 5, name: "Custom slider", description: "d5", content: [] },
  { id: 6, name: "Webpack testid cleaner", description: "d6", content: [] },
];

// #region ~ __COMPONENT__
export default function ViewCodeStructure() {
  // _ __HOOKS__
  // #redion __HOOKS__
  const isView: boolean = useAppSelector((state) => state.dataCntl10.isView);
  // #endredion __HOOKS__

  return (
    <div className={`${css.wrapper}`}>
      {!isView && <ViewStructureBtn />}
      {isView && <StructurePanel __data={__data} />}
      {isView && <CloseViewStructureBtn />}
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
