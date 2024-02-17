/** @format */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
