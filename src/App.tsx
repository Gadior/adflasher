import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./Components/Feature/redux/store.tsx";

// ~ routes comps
import Main from "./Components/Pages/main/main.tsx";
import Page1 from "./Components/Pages/1/page.tsx";
import Page2 from "./Components/Pages/2/page.tsx";
import Page3 from "./Components/Pages/3/page.tsx";
import Page4 from "./Components/Pages/4/page.tsx";
import Page5 from "./Components/Pages/5/page.tsx";
import Page6 from "./Components/Pages/6/page.tsx";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="1" element={<Page1 />} />
          <Route path="2" element={<Page2 />} />
          <Route path="3" element={<Page3 />} />
          <Route path="4" element={<Page4 />} />
          <Route path="5" element={<Page5 />} />
          <Route path="6" element={<Page6 />} />
        </Routes>
      </Provider>
    </HashRouter>
  );
}

export default App;
