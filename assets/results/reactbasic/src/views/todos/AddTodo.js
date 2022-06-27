import React from "react";
import { ToastContainer, toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleOnChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  handleClickSubmit = () => {
    if ((!this.state.title)) {
      toast.error("phan nhap k duoc de trong");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
    };
    this.props.AddTodo(todo);
    this.state.title = "";
  };
  render() {
    let { title } = this.state;

    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(e) => this.handleOnChangeTitle(e)}
        />
        <button
          className="btn btn-success"
          type="button"
          onClick={() => this.handleClickSubmit()}
        >
          Add
        </button>
      </div>
    );
  }
}
export default AddTodo;
