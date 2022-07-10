import "../Login/LoginStyle.scss";
import { NavLink } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

export const Login = (props) => {
  let clientId = props.clientId
  let onSuccess=props.onSuccess
  window.scrollTo({ top: 0 });
  
  const onFailure = (response) => {
    console.log("FAILD", response);
  };
  return (
    <div className="login-container">
      <div className="grid wide">
        <div className="google-login">
        <img src='https://duchl02.github.io/assets/results/webbanhang/src/assets/img/logoheader.png'/>
        <p>Hãy đăng nhập đẻ bắt đầu đặt hàng</p>
        <h1>Đăng Nhập</h1>
          <GoogleLogin
            clientId={clientId}
            buttonText="Đăng nhập với Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div>
      </div>
    </div>
  );
};
export const Logout = (props) => {
  const clientId = props.clientId
  const user = props.user
  let history = useHistory();
  const handleClickLogout = () => {
    history.push("/");
  };
  const onSuccess = () => {
    console.log("logout success");
  };
  return (
    <>
      {user&& <div  onClick={() => handleClickLogout()} className="google-logout">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>}
    {user.length === 0  && <h1>hay danwg hha</h1>}
    </>
  );
};
