import "../styles/global.css";
import React, { useEffect, useState } from "react";
import Nav from "./Nav/nav";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Home/Home";
import Product from "./Product/Product";
import News from "./News/News";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Shopping from "./Shopping/Shopping";
import Cart from "./Cart/Cart";
import { Login, Logout } from "./Login/Login";
import ProductPage from "./ProductPage/ProductPage";
import useFetch from "../custom/fetch";
import { gapi } from "gapi-script";
;
function App() {
  const clientId =
  "545591293381-r81f531rg6emth069dmr0osqc36rplfu.apps.googleusercontent.com"
  const [checkUser,setCheckUser] = useState(false);
  const [user, setUser]=useState({})
  const onSuccess = (response) => {
    setUser(response.profileObj);
    setCheckUser(true)
    // console.log("SUCCESS", user);
  };
console.log(checkUser);
  let { data: dataBlock, loadedData } = useFetch(
    "https://6288a9b610e93797c15d8515.mockapi.io/api/product"
  );

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  const [listProduct, setListProduct] = useState([]);
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
  const handleDelete = (id) => {
    let newListProduct = listProduct;
    newListProduct.splice(
      newListProduct.findIndex(function (i) {
        return i.id === id;
      }),
      1
    );
    toast.error('Đã xoá sản phẩm ra khỏi giỏ')

    setListProduct([...newListProduct]);
  };
  const data = listProduct.map((aitem) => {
    return dataBlock.filter((bitem) => {
      return bitem.id === aitem.id;
    });
  });
  // let [datamap, setDatamap] = useState([]);
  let datamap = [];
  data.map((aitem) => {
    return aitem.map((bitem) => {
      datamap.push(bitem);
    });
  });

  datamap.map((item) => {
    return listProduct.filter((aitem) => {
      return (item.quality = aitem.quality);
    });
  });
  // console.log(listProduct);
  return (
    <BrowserRouter>
      <div className="App">
        <Nav listProduct={listProduct} user={user} checkUser={checkUser} />
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
          <Route exact path="/login">
            <Login user={user} clientId={clientId} onSuccess={onSuccess}  />
            <Logout clientId={clientId} user={user} />
          </Route>
          <Route exact path="/cart">
            <Cart
              loadedData={loadedData}
              handleDelete={handleDelete}
              datamap={datamap}
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
