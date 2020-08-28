import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { handleChange, handleRegisterSubmit } from "./authenticationFunctions";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState();
  let history = useHistory();

  const onUsernameUpdate = (value) => {
    setUsername(value);
  };

  const onPasswordUpdate = (value) => {
    setPassword(value);
  };

  const onEmailUpdate = (value) => {
    setEmail(value);
  };

  const onErrorUpdate = (value) => {
    setErrors(value);
  }

  return (
    <div>
      Register
      <form onSubmit={(e) => handleRegisterSubmit(e, username, password, email, history, onErrorUpdate)}>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) =>
              handleChange(e, onUsernameUpdate, onPasswordUpdate, onEmailUpdate)
            }
          />
          {errors ? errors : null}
        </label>
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) =>
              handleChange(e, onUsernameUpdate, onPasswordUpdate, onEmailUpdate)
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
              handleChange(e, onUsernameUpdate, onPasswordUpdate, onEmailUpdate)
            }
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Register;
