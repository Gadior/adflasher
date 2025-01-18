import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
// ~ routes comps
import Main from "./Components/Pages/main/main.tsx";
import Page1 from "./Components/Pages/1/page.tsx";
import Page2 from "./Components/Pages/2/page.tsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="1" element={<Page1 />} />
        <Route path="2" element={<Page2 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
