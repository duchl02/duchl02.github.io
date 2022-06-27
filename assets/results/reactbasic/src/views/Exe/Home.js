import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import { connect } from "react-redux";
class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      //   this.props.history.push("/todo");
    }, 5000);
  }
  handerOnClickDeleteUser=(item)=>{
    this.props.deleteUserRedux(item)
  }
  handerCreate=()=>{
    this.props.addUserRedux()
  }
  render() {
    let listUsers = this.props.dataRedux;

    return (
      <div>
        <h1>Home Page</h1>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
                <div key={index + 1}>
                  {item.id} - {item.name}  &nbsp;&nbsp;
                  <button className="btn btn-danger"
                    onClick={() => this.handerOnClickDeleteUser(item)}
                  >Delete</button>
                </div>
            );
          })}
          <button className="btn btn-success" onClick={() =>this.handerCreate()}>Create</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};
const mapDispatchToProps = (dispatch) =>{
    return {
        deleteUserRedux: (userDelete) => dispatch({
            type:"DELETE_USER",
            payload:userDelete 
        }),
        addUserRedux: (userAdd) => dispatch({ type:"ADD_USER", payload:userAdd})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Color(Home));
