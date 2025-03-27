// import "./reset.css";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ~ style
import "./index.css";

// ~ redux
import store from "./Components/Pages/12/src/Redux/store";

// ~ routes comps
import { SuspenseLoader } from "./Components/Pages/10/src/Entities";
import Main from "./Components/Pages/main/main";
import Page1 from "./Components/Pages/1/page";
import Page2 from "./Components/Pages/2/page";
import Page3 from "./Components/Pages/3/page";
import Page4 from "./Components/Pages/4/page";
import Page5 from "./Components/Pages/5/page";
import Page6 from "./Components/Pages/6/page";
import Page7 from "./Components/Pages/7/page";
import Page8 from "./Components/Pages/8/page";
import Page9 from "./Components/Pages/9/page";
import { LazyPage10 } from "./Components/Pages/10/page.lazy";
import Page11 from "./Components/Pages/11/page";
import { LazyNews } from "./Components/Pages/12/page.lazy";

import Banners from "./Components/Pages/banners/page";
import { LazyPageTest } from "./Components/Pages/__test/page.lazy";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="1" element={<Page1 />} />
          <Route path="2" element={<Page2 />} />
          <Route path="3" element={<Page3 />} />
          <Route path="4" element={<Page4 />} />
          <Route path="5" element={<Page5 />} />
          <Route path="6" element={<Page6 />} />
          <Route path="7" element={<Page7 />} />
          <Route path="8" element={<Page8 />} />
          <Route path="9" element={<Page9 />} />
          <Route
            path="10"
            element={
              <Suspense fallback={<SuspenseLoader />}>
                <LazyPage10 />
              </Suspense>
            }
          />
          <Route path="11" element={<Page11 />} />
          <Route
            path="12"
            element={
              <Suspense fallback={"...loading"}>
                <LazyNews />
              </Suspense>
            }
          />

          <Route path="banners" element={<Banners />} />
          <Route
            path="test"
            element={
              <Suspense fallback={"...loading"}>
                <LazyPageTest />
              </Suspense>
            }
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
