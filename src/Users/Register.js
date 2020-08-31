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
    <div className="register">
      <p>{ errors ? errors : null }</p>
      <form className="register__form" onSubmit={(e) => handleRegisterSubmit(e, username, password, email, history, onErrorUpdate)}>
        <h1>Register</h1>
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
        </label>
        <label>
          Email:
          <br />
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
