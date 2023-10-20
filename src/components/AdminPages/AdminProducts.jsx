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
  Justify,
  Tag,
  EggFried,
  TagFill,
  CardImage,
  EggFill,
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
  const [image, setImage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = (op, id, name, price, description, image) => {
    setName("");
    setDescription("");
    setPrice("");
    setImage("");
    if (op === 1) {
      setModalTitle("Registrar Producto");
    } else if (op === 2) {
      setName(name);
      setDescription(description);
      setPrice(price);
      setImage(image);
      setModalTitle("Editar Producto");
    }
    setShowModal(true);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">Administrador de productos</h1>
      <div className="row m-3">
        <div className="col-md-4 offset-md-4">
          <div className="d-grid mx-auto">
            <Button
              variant="success"
              onClick={() => {
                handleShow(1);
              }}
            >
              <PlusCircleFill />
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
                  className="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      handleShow(
                        2,
                        product.id,
                        product.name,
                        product.price,
                        product.description,
                        product.image
                      );
                    }}
                  >
                    <PencilFill className="text-light" />
                  </button>
                  <button type="button" className="btn btn-danger">
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
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <EggFill />
            </span>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <Justify />
            </span>
            <input
              type="text"
              id="description"
              className="form-control"
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <Tag />
            </span>
            <input
              type="text"
              id="price"
              className="form-control"
              placeholder="Precio"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <CardImage />
            </span>
            <input
              type="text"
              id="image"
              className="form-control"
              placeholder="URL de la imagen"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export { AdminProducts };
