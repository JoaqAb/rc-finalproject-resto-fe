import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function ProductForm() {
  return (
    <Container
      className="bg-light fixed-top"
      style={{ marginTop: "3.5em", paddingTop: "1em" }}
    >
      <Form>
        <Form.Group className="mb-3" controlId="Nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Milanesa con papas fritas"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Descripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Mila de ternera con guarnición de papas fritas o al horno"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Precio">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" placeholder="1520" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ImgURL">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="https://google.com/imagen.jpg"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg">
          Guardar
        </Button>
      </Form>
    </Container>
  );
}

export { ProductForm };
