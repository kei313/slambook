import { useState } from "react";

import "./App.css";

function App() {
  {
    /* useState Hook */
  }
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [favoriteFood, setFavoriteFood] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      /* prevent page reload submit */
    }
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <form id="form-input" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} //set value
              required
            />
          </label>

          <br />

          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>

          <br />

          <label>
            Contact Number:
            <input
              type="number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </label>

          <br />

          <label>
            Favorite color:
            <input
              type="text"
              value={favoriteColor}
              onChange={(e) => setFavoriteColor(e.target.value)}
              required
            />
          </label>

          <br />

          <label>
            Favorite food:
            <input
              type="text"
              value={favoriteFood}
              onChange={(e) => setFavoriteFood(e.target.value)}
              required
            />
          </label>

          <br />

          <button type="submit">Submit</button>
        </form>
      ) : (
        //ternary
        <div id="data-output">
          <p>
            <h2>{name}</h2>
          </p>
          <hr></hr>
          <p>
            <strong>Age: </strong> {age} Years Old
          </p>
          <p>
            <strong>Contact Number: </strong>
            {contactNumber}
          </p>
          <p>
            <h2>Favorites</h2>
          </p>
          <hr></hr>
          <p>
            <strong>Color: </strong>
            {favoriteColor}
          </p>
          <p>
            <strong>Food: </strong>
            {favoriteFood}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
