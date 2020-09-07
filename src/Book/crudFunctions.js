import { axiosInstance } from "../Users/axiosApi.js";

//Cross Site Request Forgery Protection as per Django Docs
export const getCookie = (name) => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

//Delete a court booking
export const deleteItem = (courtBookingID, history, formDel) => {
  axiosInstance
    .delete(`http://127.0.0.1:8000/api/tbook-delete/${courtBookingID}/`)
    .catch((error) => {
      console.log("delItemErr: ", error);
    });

  if (formDel === true) {
    history.push("/tennis-book");
  } else if (formDel === false) {
    window.location.reload(false);
  }
};

//Function to update currentItem based off changes in each individual form field
export const handleChange = (e, updateItem, currentItem) => {
  const name = e.target.name;
  const value = e.target.value;

  if (name === "player1") {
    updateItem({ ...currentItem, [name]: value, author: value });
  } else if (name === "court_play") {
    if (value === "1") {
      updateItem({ ...currentItem, player3: "", player4: "", [name]: value });
    } else {
      updateItem({ ...currentItem, [name]: value });
    }
  } else {
    updateItem({ ...currentItem, [name]: value });
  }
};

//Submits the form to DRF API, sets currentItem back to blank, and redirects to court booking page
export const handleSubmit = (e, currentItem, data, history) => {
  e.preventDefault();
  var newUrl = "/tbook-create/";

  if (data.state.edit_val === true) {
    newUrl = `/tbook-update/${currentItem.id}/`;
  }

  axiosInstance.post(newUrl, currentItem).catch((error) => {
    console.log("delItemErr: ", error);
  });
  history.push("/tennis-book");
};
