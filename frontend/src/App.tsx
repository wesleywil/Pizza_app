import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/homepage/homepage";
import Menu from "./pages/menu/menu";
import CreatePizza from "./pages/create_pizza/createPizza";

// Components
import Navbar from "./components/Navbar/navbar.component";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/create" element={<CreatePizza />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
