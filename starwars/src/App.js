import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./components/Card";

import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(resolve => {
        console.log(resolve.data);
        setData(resolve.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className="App">
        <h1 className="Header">React Wars</h1>
      </div>
      <div>
        {data.map((character, key) => {
          return <Card key={key} name={character.name} />;
        })}
      </div>
    </>
  );
};

export default App;
