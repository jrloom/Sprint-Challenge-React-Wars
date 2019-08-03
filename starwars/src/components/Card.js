import React from "react";
import { Container } from "semantic-ui-react";

const Card = props => {
  return (
    <Container>
      <Container>{props.name}</Container>
    </Container>
  );
};

export default Card;
