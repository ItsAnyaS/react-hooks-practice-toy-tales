import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const [newToy, setNewToy]= useState({})
  const [refresh, setRefresh]= useState(false)
  const getToys = async () => {
    let req = await fetch("http://localhost:3001/toys");
    let res = await req.json()
    setToys(res)
  }
  useEffect(()=> {
    getToys()
 
  }, [refresh])
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  const handleChange = (name, value) => {
    setNewToy({
      ...newToy,
      [name]: value
    })
  }
  return (
    <>
      <Header />
      {showForm && (
        <ToyForm
          toys={toys}
          handleChange={handleChange}
          setToys={setToys}
          newToy={newToy}
        />
      )}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setRefresh={setRefresh} />
    </>
  );
}

export default App;
