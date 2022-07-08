import "../styles/global.css";
import React, { useEffect, useState } from "react";
import Nav from "./Nav/nav";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./Home/Home";
import Product from "./Product/Product";
import News from "./News/News";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Shopping from "./Shopping/Shopping";
import Cart from "./Cart/Cart";
import ProductPage from "./ProductPage/ProductPage";
import useFetch from "../custom/fetch";
function App() {
  let { data: dataBlock, loadedData } = useFetch(
    "https://6288a9b610e93797c15d8515.mockapi.io/api/product"
  );
  const [listProduct, setListProduct] = useState([]);
  console.log(listProduct);
  const handlePush = (id) => {
    const item = { id: id, quality: 1 };
    const check = listProduct.find((item) => item.id === id);
    toast.success("Đã thêm sản phẩm vào giỏ hàng");


    if (!check) {
      setListProduct([item, ...listProduct]);

    } else {
      const findID = listProduct.findIndex((item) => item.id === id);
      listProduct[findID].quality = listProduct[findID].quality + 1;
    }
  };

  // console.log(listProduct);
  return (
    <BrowserRouter>
      <div className="App">
        <Nav listProduct={listProduct} />
        <Switch>
          <Route exact path="/">
            <Home
              dataBlock={dataBlock}
              loadedData={loadedData}
              handlePush={handlePush}
            />
          </Route>

          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/shopping">
            <Shopping />
          </Route>
          <Route exact path="/cart">
            <Cart
              dataBlock={dataBlock}
              loadedData={loadedData}
              listProduct={listProduct}
            />
          </Route>
          <Route exact path="/product">
            <Product
              dataBlock={dataBlock}
              loadedData={loadedData}
              handlePush={handlePush}

            />
          </Route>
          <Route path="/product/:id">
            <ProductPage
              dataBlock={dataBlock}
              loadedData={loadedData}
              handlePush={handlePush}
            />
          </Route>
        </Switch>
        <Footer />
        <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
