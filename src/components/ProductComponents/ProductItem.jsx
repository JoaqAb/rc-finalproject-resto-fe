import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function ProductItem(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td className="d-none d-sm-table-cell">{props.description}</td>
      <td>{props.price}</td>
      <td className="d-none d-md-table-cell">{props.image}</td>
      <td>
        <ButtonGroup size="sm">
          <Button variant="primary">D</Button>
          <Button variant="warning">E</Button>
          <Button variant="danger">X</Button>
        </ButtonGroup>
      </td>
    </tr>
  );
}

export { ProductItem };
