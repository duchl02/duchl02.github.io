import React from "react";
import { withRouter } from "react-router";
import axios from "axios";
class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      console.log(res.data.data);
      this.setState({
        user: res,
      });
    }
  }
  handerBack=()=>{
    this.props.history.push('/user')
  }
  render() {
    let { user } = this.state;
    let checkEditTodo = Object.keys(user).length === 0;
    if (checkEditTodo) {
    } else {
      console.log(user.data.data.id);
    }
    return (
      <>
        <h1>Detail User</h1>
        {checkEditTodo === false ? (
          <>
            <div>
              User name: {user.data.data.first_name}
              {user.data.data.last_name}
            </div>
            <div>User email: {user.data.data.email}</div>
            <img src={user.data.data.avatar}></img>
            <div>
            <button onClick={() =>this.handerBack()}>Back</button>
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    );
  }
}
export default withRouter(DetailUser);
