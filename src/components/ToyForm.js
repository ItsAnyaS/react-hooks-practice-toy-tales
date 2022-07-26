import React from "react";

function ToyForm({toys, handleChange, setToys, newToy}) {

const handleInput = (e) => {
handleChange(e.target.name, e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
  setToys([...toys, newToy])
  fetch("http://localhost:3001/toys", {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(newToy)
  });

}

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleInput}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleInput}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
