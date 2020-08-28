import { useState } from "react";
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

export const handleLoginSubmit = (e, username, password, history) => {
  e.preventDefault();
  try {
    const response = axiosInstance.post('/token/obtain/', {
      username: username,
      password: password
    }).then((response) => {
      axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      return response;
    });
  } catch (error) {
    throw error;
  }
  history.push("/tennis-book");
}

export const handleRegisterSubmit = (e, username, password, email, history, onErrorUpdate) => {
  e.preventDefault();
  try {
    const response = axiosInstance.post('/user/create/', {
      username: username,
      email: email,
      password: password
    }).then((response) => {
      console.log(response)
      return response;
    })
  } catch (error) {
      console.log(error.stack);
      onErrorUpdate(error.response.data);
  }
  history.push("/tennis-book");
}