import "../Cart/CartStyle.scss";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";


const Cart = (props) => {
  window.scrollTo({ top: 0 });
  let dataBlock = props.dataBlock;

  let listProduct = props.listProduct;
  console.log(listProduct);

  const data = listProduct.map((aitem) => {
    return dataBlock.filter((bitem) => {
      return bitem.id === aitem.id;
    });
  });
  let datamap = [];
  data.map((aitem) => {
    return aitem.map((bitem) => {
      datamap.push(bitem);
    });
  });
  console.log(listProduct.map((aitem=>{
    return aitem.quality
  })))
  
  datamap.map((item) => {
    return listProduct.filter((aitem) => {
      return item.quality = aitem.quality;
    });
  });
  let [newData, setNewData] = useState(datamap);
  
  console.log(newData);

  const handleDelete=(id) =>{
    let data = datamap.filter(item=>{
      return item.id !== id
    })
    setNewData(data);
  }
  
  // let value = document.getElementsByClassName("inputvalue")
  // console.log(value);
  let total= new Number 
  let end= new Number 

  return (
    <div className="cart-container">
      <div className="grid wide">
        <div className="link-product">
          <NavLink activeClassName="active" exact={true} to="/">
            Trang chủ
          </NavLink>
          &nbsp;/&nbsp;
          <NavLink activeClassName="active" to="/product">
            Sản phẩm
          </NavLink>
          &nbsp;/&nbsp;<span>Giỏ hàng</span>
        </div>
        <div className="cart">
          <div className="cart-title row">
            <h1 className=" col l-6 m-6 c-12">Giỏ hàng</h1>
            <div className=" quality col l-1 m-1 c-0">Giá</div>
            <div className=" quality col l-1 m-1 c-0">Số lượng</div>
            <div className=" total col l-4 m-4 c-0">Tổng cộng</div>
          </div>
          {newData &&
            newData.length > 0 &&
            newData.map((item) => {
              let totelItem =parseInt(item.price) * parseInt(item.quality)
              total = total + totelItem
              end = total + 40000
              return (
                <div className="cart-main row">
                  <div className=" cart-img col l-2 m-2 c-4">
                    <img alt="sdas" src={item.image} />
                  </div>
                  <div className="cart-content col l-4 m-4 c-8">
                    <h3>{item.name}</h3>
                    <p>{item.content}</p>
                  </div>
                  <div className="cart-price col l-1 m-1 c-2">
                    <p>{parseInt(item.price).toLocaleString()} VND</p>
                  </div>
                  <div className=" cart-input-quality col l-1 m-1 c-2">
                   <p>{item.quality}</p>
                  </div>
                  <div className=" cart-delete-total col l-4 m-4 c-8">
                    <button onClick={() =>handleDelete(item.id)}>Loại bỏ</button>
                    <span>{totelItem.toLocaleString() } VNĐ</span>
                  </div>
                </div>
              );
            })}

          <div className="cart-total row">
            <div className="col l-6 m-6 c-12">
              <div className="total-content">
                <div className="total-left">
                  <p>Tạm tính</p>
                  <p>Phí ship</p>
                  <h4>Tổng</h4>
                </div>
              </div>
              <div className="total-right">
                <p>{total.toLocaleString()}VNĐ</p>
                <p>40,000VNĐ</p>
                <h4>{end.toLocaleString()}VNĐ</h4>
              </div>
            </div>
            <button>Thanh Toan</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
