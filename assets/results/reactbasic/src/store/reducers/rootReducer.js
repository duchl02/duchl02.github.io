const initState = {
  users: [
    { id: 1, name: "John" },
    { id: 2, name: "witdh" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let users = state.users;
      users = users.filter((user) => user.id !== action.payload.id);
      console.log(users);
      return {
        ...state,
        users,
      };
    case "ADD_USER":
        let id = Math.floor(Math.random() * 100)
        let user = {id:id , name: `random: ${id} `}
        return {
            ...state,users:[...state.users,user]
        }
    default:
      return state;
  }
};
export default rootReducer;
