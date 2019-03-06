import React from "react";
import ReactDOM from "react-dom";
import Users from "./Users";

function App() {
  return (
    <div className="App">
      <Users>
        {({ users, remove, disabled }) => (
          <>
            <ul>
              {users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
            <button disabled={disabled} onClick={remove}>
              Remove last
            </button>
          </>
        )}
      </Users>

      <Users>
        {({ users, remove }) => (
          <>
            <ul>
              {users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
            <button onClick={remove}>Remove last</button>
          </>
        )}
      </Users>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
