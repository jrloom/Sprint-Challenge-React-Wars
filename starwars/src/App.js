import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Divider, Card } from "semantic-ui-react";

import CharacterCard from "./components/CharacterCard";

import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(resolve => setData(resolve.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className="App">
        <h1 className="Header">React Wars</h1>
      </div>
      <Divider />
      <Container>
        <Card.Group itemsPerRow={3}>
          {data.map((character, key) => {
            return <CharacterCard key={key} name={character.name} birth={character.birth_year} height={character.height} mass={character.mass} />;
          })}
        </Card.Group>
      </Container>
    </>
  );
};

export default App;
