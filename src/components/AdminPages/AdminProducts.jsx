import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useFetch } from "./useFetch";
import { useState, useEffect } from "react";
import {
  PlusCircleFill,
  TrashFill,
  EyeFill,
  PencilFill,
} from "react-bootstrap-icons";

function AdminProducts() {
  const { data, loading, error } = useFetch(
    "https://resto-rolling.onrender.com/api/products/list"
  );

  {
    /*variables formulario*/
  }
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImgae] = useState("");
  const [operation, setOperation] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container className="mt-5">
      <h1 className="text-center">Administrador de productos</h1>
      <div className="row m-3">
        <div className="col-md-4 offset-md-4">
          <div className="d-grid mx-auto">
            <Button variant="success" onClick={handleShow}>
              <PlusCircleFill />
              Añadir
            </Button>
          </div>
        </div>
      </div>
      <Table striped responsive hover bordered>
        <thead>
          <tr>
            {/*<th>#</th>*/}
            <th>Nombre</th>
            <th>Precio</th>
            <th className="d-none d-sm-table-cell">Descripción</th>
            <th className="d-none d-md-table-cell">Img URL</th>
            <th>CRUD</th>
          </tr>
        </thead>
        <tbody>
          {error && <tr>Error: {error}</tr>}
          {loading && <tr>Loading...</tr>}
          {data?.map((product) => (
            <tr key={product.id}>
              {/*<td>{product.id}</td>*/}
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td className="d-none d-sm-table-cell">{product.description}</td>
              <td className="d-none d-md-table-cell">{product.image}</td>
              <td>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button type="button" class="btn btn-warning">
                    <PencilFill className="text-light" />
                  </button>
                  <button type="button" class="btn btn-danger">
                    <TrashFill />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export { AdminProducts };
