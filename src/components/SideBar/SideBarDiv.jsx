import React from "react";
import styled from "styled-components";
import ListGroup from 'react-bootstrap/ListGroup';
import About from "../../screens/About";

function List() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>Cras justo odio
      </ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
  );
}

export default List;