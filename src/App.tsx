import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ~ routes comps
import Main from "./Components/Pages/main/main.tsx";
import MainPage from "./Components/Pages/test1/page.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="test1" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
