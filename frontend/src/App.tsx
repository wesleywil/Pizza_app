import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/homepage/homepage";
import Menu from "./pages/menu/menu";
import CreatePizza from "./pages/create_pizza/createPizza";
import CreateAccountLogin from "./pages/create_account_login/createAccountLogin";
import Order from "./pages/order/order";

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
        <Route path="/account" element={<CreateAccountLogin />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
