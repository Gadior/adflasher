import { Provider } from "react-redux";
import Page from "./page";
import store from "./src/Redux/store";

export default function ContextPage() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}
