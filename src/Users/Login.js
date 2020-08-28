import React, { useState } from "react";
import { handleChange, handleLoginSubmit } from "./authenticationFunctions.js";
import { useHistory } from "react-router-dom";

import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const onUsernameUpdate = (value) => {
    setUsername(value);
  };

  const onPasswordUpdate = (value) => {
    setPassword(value);
  };

  return (
    <div>
      Login
      <form onSubmit={(e) => handleLoginSubmit(e, username, password, history)}>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) =>
              handleChange(e, onUsernameUpdate, onPasswordUpdate)
            }
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) =>
              handleChange(e, onUsernameUpdate, onPasswordUpdate)
            }
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
