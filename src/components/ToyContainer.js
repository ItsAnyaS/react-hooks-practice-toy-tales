import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setRefresh}) {
  const handleRender = () => {
    return toys
  }
  return (
    <div id="toy-collection">{handleRender().map(toy => {
      return (<ToyCard toy={toy} setRefresh={setRefresh} key={toy.id}/>)
    })}</div>
  );
}

export default ToyContainer;
