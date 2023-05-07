import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Product from "./pages/Product";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div style={{ height: "65px" }}>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
