import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";

// Components
import Navbar from "./components/Navbar/navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
