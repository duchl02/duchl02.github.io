import "../Shopping/ShoppingStyle.scss";
import { NavLink } from "react-router-dom";

const Shopping = () => {
    
  return (
    <div className="shopping-container">
      <div className="grid wide">
        <div className="link-product">
          <NavLink activeClassName="active" exact={true} to="/">
            Trang chủ
          </NavLink>
          <NavLink activeClassName="active" to="/product">
            Sản phẩm
          </NavLink>
          <span>Gi</span>
        </div>
      </div>
    </div>
  );
};
export default Shopping;
