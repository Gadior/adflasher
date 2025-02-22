// import "./reset.css";
import React from "react";
import {  BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./Components/Feature/redux/store";

// ~ style
import "./index.css";

// ~ routes comps
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
import Page10 from "./Components/Pages/10/page";

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
          <Route path="10" element={<Page10 />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
