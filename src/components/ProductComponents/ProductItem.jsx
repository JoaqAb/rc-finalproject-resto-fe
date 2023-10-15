import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { TrashFill, EyeFill, PencilFill } from "react-bootstrap-icons";

function ProductItem(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td className="d-none d-sm-table-cell">{props.description}</td>
      <td>{props.price}</td>
      <td className="d-none d-md-table-cell">{props.image}</td>
      <td>
        <ButtonGroup size="sm">
          <Button variant="primary">
            <EyeFill />
          </Button>
          <Button variant="warning">
            <PencilFill className="text-light" />
          </Button>
          <Button variant="danger">
            <TrashFill />
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
}

export { ProductItem };
