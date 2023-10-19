import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useFetch } from "./useFetch";

function AdminProducts() {
  const { data, loading, error } = useFetch(
    "https://resto-rolling.onrender.com/api/products/list"
  );
  return (
    <Container className="mt-5">
      <h1 className="text-center">Administrador de productos</h1>
      <Table striped responsive hover bordered>
        <thead>
          <tr>
            <th>Nombre</th>
            <th className="d-none d-sm-table-cell">Precio</th>
            <th>Descripción</th>
            <th className="d-none d-md-table-cell">Img URL</th>
            <th>CRUD</th>
          </tr>
        </thead>
        <tbody>
          {error && <tr>Error: {error}</tr>}
          {loading && <tr>Loading...</tr>}
          {data?.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td className="d-none d-sm-table-cell">{product.description}</td>
              <td className="d-none d-sm-table-cell">{product.image}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export { AdminProducts };
