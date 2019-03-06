import React from "react";

class Users extends React.Component {
  state = {
    users: [
      { id: 1, name: "john" },
      { id: 2, name: "greg" },
      { id: 3, name: "arnold" }
    ]
  };

  removeLast = () => {
    const { users } = this.state;
    const newList = [...users].slice(0, users.length - 1);

    this.setState({
      users: [...newList]
    });
  };

  render() {
    return this.props.children({
      users: this.state.users,
      remove: this.removeLast,
      disabled: !Boolean(this.state.users.length)
    });
  }
}

export default Users;
