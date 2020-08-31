import { axiosInstance } from "./axiosApi.js";


export const handleChange = (
  e,
  onUsernameUpdate,
  onPasswordUpdate,
  onEmailUpdate
) => {
  const name = e.target.name;
  const value = e.target.value;

  if (name === "username") {
    onUsernameUpdate(value);
  } else if (name === "password") {
    onPasswordUpdate(value);
  } else if (name === "email") {
    onEmailUpdate(value);
  }
};

export const handleLoginSubmit = (e, username, password, history, onErrorUpdate) => {
  e.preventDefault();

    axiosInstance.post('/token/obtain/', {
      username: username,
      password: password
    }).then((response) => {
      axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      history.push("/tennis-book");
      return response;
    }).catch (error => {
      console.log(error.response)
      if (error.response.status === 401) {
        onErrorUpdate("Either the username or password you entered was incorrect. Please try again.")
      } else if (error.request) {
        onErrorUpdate(error.request)
      } else {
        onErrorUpdate("An unknown error has occured.")
      }
    })

}

export const handleRegisterSubmit = (e, username, password, email, history, onErrorUpdate) => {
  e.preventDefault();

    axiosInstance.post('/user/create/', {
      username: username,
      email: email,
      password: password
    }).then((response) => {
      history.push("/tennis-book");
      return response;
    }).catch (error => {
    if (error.response) {
      console.log(error.response)
      if (error.response.data.password) {
        onErrorUpdate("Your password does not meet the required minimum 8 characters!")
      } else if (error.response.status === 500) {
        onErrorUpdate("You username is already in use. Please choose a different username.")
      }
    } else if (error.request) {
      onErrorUpdate(error.request)
    } else {
      onErrorUpdate("An unknown error has occured.")
    }
  })
}