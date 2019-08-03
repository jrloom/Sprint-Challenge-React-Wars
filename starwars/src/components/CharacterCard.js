import React from "react";
import { Card, Segment } from "semantic-ui-react";

const CharacterCard = props => {
  return (
    <Card raised>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Segment.Group raised>
          <Segment>Born: {props.birth}</Segment>
          <Segment>Height: {props.height}</Segment>
          <Segment>Mass: {props.mass}</Segment>
        </Segment.Group>
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;
