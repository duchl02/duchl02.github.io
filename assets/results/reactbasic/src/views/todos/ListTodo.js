import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listtodos: [
      {
        id: 1,
        title: "writting",
      },
      {
        id: 2,
        title: "standing",
      },
      {
        id: 3,
        title: "holding",
      },
    ],
    edittodo: {},
  };

  AddTodo = (todo) => {
    this.setState({
      listtodos: [...this.state.listtodos, todo],
    });
    toast.success("them thanh cong");
  };

  deleteJob = (item) => {
    let current = this.state.listtodos;
    current = current.filter((todo) => {
      return todo.id !== item.id;
    });
    this.setState({
      listtodos: current,
    });
    toast.success("xoa thanh cong");
  };

  handleUpdate = (todo) => {
    let { listtodos, edittodo } = this.state;
    let checkEditTodo = Object.keys(edittodo).length === 0;

    if (checkEditTodo === false && todo.id === edittodo.id) {
      let fakelisttodos = [...this.state.listtodos];
      let ojbfake = fakelisttodos.findIndex((item) => item.id === todo.id);

      fakelisttodos[ojbfake].title = edittodo.title;
      // return;
      this.setState({
        listtodos: fakelisttodos,
        edittodo: {}
      });
    toast.success("sua thanh cong");

      return;
    }
    this.setState({
      edittodo: todo,
    });
  };

  handleUpdateTodo = (e) => {
    let current = this.state.edittodo;
    current.title = e.target.value;
    this.setState({
      edittodo: current,
    });
  };

  render() {
    let { listtodos, edittodo } = this.state;

    let checkEditTodo = Object.keys(edittodo).length === 0;
    console.log(checkEditTodo);
    return (
      <div className="list-todo-container">
        <AddTodo AddTodo={this.AddTodo} />
        <div className="list-todo-content container">
          <table className="table text-center table-bordered">
            <thead>
              <tr className="list-form">
                <th className="text-center">STT</th>
                <th className="text-center">Work</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            {listtodos &&
              listtodos.length > 0 &&
              listtodos.map((item, index) => {
                return (
                  <tbody key={item.id}>
                    <tr>
                      <td>{index}</td>
                      {checkEditTodo === true ? (
                        <td>{item.title}</td>
                      ) : (
                        <>
                          {item.id === edittodo.id ? (
                            <td>
                              <input
                                value={edittodo.title}
                                onChange={(e) => this.handleUpdateTodo(e)}
                              />
                            </td>
                          ) : (
                            <td>{item.title}</td>
                          )}
                        </>
                      )}
                      <td>
                        <div>
                          <button
                            className="btn btn-warning"
                            id="edit-btn"
                            onClick={() => this.handleUpdate(item)}
                          >
                            {checkEditTodo === false && item.id === edittodo.id
                              ? "Save"
                              : "Edit"}
                          </button>
                          <button
                            id="btn-delete"
                            className="btn btn-danger"
                            onClick={() => this.deleteJob(item)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    );
  }
}
export default ListTodo;
