import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

function ProductTable(props) {
  return (
    <Container className="mt-5">
      <Table striped responsive hover bordered>
        <thead>
          <tr>
            <th>Nombre</th>
            <th className="d-none d-sm-table-cell">Descripción</th>
            <th>Precio</th>
            <th className="d-none d-md-table-cell">Img URL</th>
            <th>CRUD</th>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </Table>
    </Container>
  );
}

export { ProductTable };
