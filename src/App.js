import './App.css';
import Main1 from './Main1.js';
import ProductsAdmin from './components/Products/ProductsAdmin';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/products/admin" element={<ProductsAdmin />} />
          <Route path="/" element={<Main1 />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
