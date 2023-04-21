import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListting/ProductListing";
import Header from "./components/Header/Header";
import "./App.css";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
