import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./BookForm.css";

//TODO: Figure out how to pass courtbooking cell values depending on court number and time to the form...
function BookForm() {
  let data = useLocation();
  //Sets the item that will be pushed to DRF API to create court booking
  const [currentItem, setCurrentItem] = useState({
    id: null,
    court_date: data.state.court_d ? data.state.court_d : "",
    court_time: data.state.court_t ? data.state.court_t : "",
    court_number: data.state.court_n ? data.state.court_n : "1",
    court_play: "0",
    comments: "",
    player1: "",
    player2: "",
    player3: "",
    player4: "",
    author: "",
  });
  const [edit, setEdit] = useState(false);

  //Function to update currentItem based off changes in each individual form field
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "player1") {
      setCurrentItem({ ...currentItem, [name]: value, author: value });
    } else {
      setCurrentItem({ ...currentItem, [name]: value });
    }
  };

  //Submits the form to DRF API, sets currentItem back to blank, and redirects to court booking page
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ITEM: ", currentItem);
    console.log("EDITING: ", edit);

    var csrftoken = getCookie("csrftoken");
    var url = "http://127.0.0.1:8000/api/tbook-create/";

    if (edit === true) {
      url = `http://127.0.0.1:8000/api/tbook-update/${currentItem.id}/`;
      setEdit(false);
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify(currentItem),
    }).catch(function (error) {
      console.log("ERROR: ", error);
    });
    history.push("/tennis-book");
  };

  //Cross Site Request Forgery Protection as per Django Docs
  const getCookie = (name) => {
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

  //2startEdit form to preload and setActiveItem for the court booking to be updated and editing value

  //3deleteItem to delete a court booking

  return (
    <div className="form">
      <span className="title">Court Booking Form</span>
      <form className="form__form" onSubmit={handleSubmit}>
        <label className="form__field">
          Court Date
          <br />
          <input
            type="date"
            onChange={handleChange}
            className="form__input"
            name="court_date"
            value={
              data.state.court_d ? data.state.court_d : currentItem.court_date
            }
            placeholder="YYYY-MM-DD"
          />
        </label>
        <label className="form__field">
          Court Time <br />
          <input
            onChange={handleChange}
            className="form__input"
            name="court_time"
            value={
              data.state.court_t ? data.state.court_t : currentItem.court_time
            }
          />
        </label>
        <label className="form__field">
          Court Number <br />
          <select
            onChange={handleChange}
            className="form__input"
            name="court_number"
            value={
              data.state.court_n ? data.state.court_n : currentItem.court_number
            }
          >
            <option value="1">Court 1</option>
            <option value="2">Court 2</option>
            <option value="3">Court 3</option>
            <option value="4">Court 4</option>
          </select>
        </label>
        <label className="form__field">
          Court Type (1 for Singles, 0 for Doubles) <br />
          <select
            onChange={handleChange}
            className="form__input"
            name="court_play"
            value={currentItem.court_play}
          >
            <option value="0">Doubles</option>
            <option value="1">Singles</option>
          </select>
        </label>
        <label className="form__field">
          Player <br />
          <input
            type="text"
            onChange={handleChange}
            className="form__input"
            name="player1"
            value={currentItem.player1}
          />
        </label>
        <label className="form__field">
          Player <br />
          <input
            type="text"
            onChange={handleChange}
            className="form__input"
            name="player2"
            value={currentItem.player2}
          />
        </label>
        {currentItem.court_play === "1" ? (
          ""
        ) : (
          <label className="form__field">
            Player <br />
            <input
              type="text"
              onChange={handleChange}
              className="form__input"
              name="player3"
              value={currentItem.player3}
            />
          </label>
        )}
        {currentItem.court_play === "1" ? (
          ""
        ) : (
          <label className="form__field">
            Player <br />
            <input
              type="text"
              onChange={handleChange}
              className="form__input"
              name="player4"
              value={currentItem.player4}
            />
          </label>
        )}

        <label className="form__field">
          Comments <br />
          <textarea
            onChange={handleChange}
            className="form__input"
            name="comments"
            value={currentItem.comments}
            rows="7"
            cols="30"
          />
        </label>
        <input id="submit" className="form__submit" type="submit" name="Add" />
      </form>
    </div>
  );
}

export default BookForm;
