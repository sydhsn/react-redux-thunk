import React from "react";
import "./styles.css";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h3 className="">Users</h3>
        <ul className="list-group">
          {this.props.users.map((user) => (
            <li className="list-group-item" key={user.id}>
              <strong>{user.name}</strong> | {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

export default connect(mapStateToProps)(App);
