import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handleViewUser = (item) => {
    this.props.history.push(`/user/${item.id}`);
  };
  render() {
    let { listUser } = this.state;
    return (
      <div className="container list-user-container">
        <div className="header">hello axios</div>
        <div className="list-user">
          {listUser.map((item, id) => {
            return (
              <div
                className="item"
                key={id}
                onClick={() => this.handleViewUser(item)}
              >
                {id} - {item.first_name} {item.last_name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
