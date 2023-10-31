import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import {
  TrashFill,
  PencilFill,
  Justify,
  Tag,
  CardImage,
  EggFill,
} from "react-bootstrap-icons";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alert } from "./functions";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [operation, setOperation] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    getProducts();
  },[]);
  
  const getProducts = async() => {
    const respuesta = await axios.get("https://resto-rolling.onrender.com/api/products/list");
    setProducts(respuesta.data.data);
  }

  const handleClose = () => setShowModal(false);
  const handleShow = (op, id, name, price, description, image) => {
    setOperation(op);
    setName("");
    setDescription("");
    setPrice("");
    setImage("");
    if (op === 1) {
      setModalTitle("Registrar Producto");
    } else if (op === 2) {
      setId(id);
      setName(name);
      setDescription(description);
      setPrice(price);
      setImage(image);
      setModalTitle("Editar Producto");
    }
    setShowModal(true);
    window.setTimeout(function(){
      document.getElementById("name").focus();
    },500);
  };
  const validarFormulario = () => {
    var parametros;
    var metodo;
    if(name.trim()===""){
      show_alert("Escribe el nombre del producto", "warning");      
    } else if(price.trim()===""){
      show_alert("Escribe el precio del producto", "warning");      
    } else if(description.trim()===""){
      show_alert("Escribe la descripción del producto", "warning");      
    } else if(image.trim()===""){
      show_alert("Escribe la url de la imagen del producto", "warning");      
    } else {
      if (operation===1) {
        metodo = "POST";
        parametros = {
          name:name.trim(),
          description:description.trim(),
          price:price.trim(),
          image:image.trim(),
          available:true,
        }
        crearProducto(metodo,parametros);
      } else if (operation===2) {
        metodo = "PUT";
        parametros = {
          name:name.trim(),
          description:description.trim(),
          price:price.trim(),
          image:image.trim(),
          available:true,
        }
        editarProducto(metodo,parametros,id);
      }
    }
  };
  
  const crearProducto = async(metodo,parametros) => {
    await axios({
      method: metodo,
      url: "https://resto-rolling.onrender.com/api/products/create",
      data: parametros
    }).then(function(respuesta){
      console.log(respuesta);
      show_alert("Producto creado correctamente","success");
      document.getElementById("btnCerrar").click();
    })
    .catch(function(error){
      show_alert("Error en la solicitud","error");
      console.log(error);
    });
    getProducts();
  }

  const editarProducto = async(metodo,parametros,id) => {
    await axios({
      method:metodo,
      url:"https://resto-rolling.onrender.com/api/products/update/"+id,
      data: parametros
    }).then(function(respuesta){
      console.log(respuesta);
      show_alert("Producto editado correctamente","success");
      document.getElementById("btnCerrar").click();
    })
    .catch(function(error){
      show_alert("Error en la solicitud","error");
      console.log(error);
    });
    getProducts();
  }

  const eliminarProducto = async(id,name) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title:"Seguro de eliminar el producto "+name+"?",
      icon: "question",
      text:"no se podrá deshacer la operación",
      showCancelButton:true,
      confirmButtonText:"Eliminar",
      cancelButtonText:"Cancelar"
    }).then((result) => {
      if(result.isConfirmed){
        solicitudEliminar(id);
      } else {
        show_alert("El producto no fue eliminado","info");
      }
    });
  }

  const solicitudEliminar = async(id) => {
    await axios({
      method:"DELETE",
      url:"https://resto-rolling.onrender.com/api/products/delete/"+id,
    }).then(function(respuesta){
      console.log(respuesta);
      show_alert("Producto eliminado correctamente","success");
      //document.getElementById("btnCerrar").click();
    })
    .catch(function(error){
      show_alert("Error en la solicitud","error");
      console.log(error);
    });
    getProducts();
  }

  return (
    <>
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
                Nuevo Producto
              </Button>
            </div>
          </div>
        </div>
        <Table striped responsive hover bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th className="d-none d-sm-table-cell">Descripción</th>
              {/* <th className="d-none d-md-table-cell">Img URL</th> */}
              <th>CRUD</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product._id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td className="d-none d-sm-table-cell">
                  {product.description}
                </td>
                {/* <td className="d-none d-md-table-cell">{product.image}</td> */}
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
                          product._id,
                          product.name,
                          product.price,
                          product.description,
                          product.image
                        );
                      }}
                    >
                      <PencilFill className="text-light" />
                    </button>
                    <button type="button" className="btn btn-danger" onClick={()=>{eliminarProducto(product._id,product.name)}}>
                      <TrashFill />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
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
          <Button variant="secondary" id="btnCerrar" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={() => validarFormulario()}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { AdminProducts };
