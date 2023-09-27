import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MesaModal({ show, onClose, onSubmit }) {
  const [numeroMesaInput, setNumeroMesaInput] = useState(''); // Estado para el número de mesa ingresado

  // Función para manejar el cambio en el input del número de mesa
  const handleNumeroMesaChange = (event) => {
    setNumeroMesaInput(event.target.value);
  };

  // Función para manejar el envío del número de mesa
  const handleNumeroMesaSubmit = () => {
    if (numeroMesaInput.trim() !== '') {
      onSubmit(numeroMesaInput); // Llama a la función onSubmit con el número de mesa ingresado
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ingresa tu número de mesa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          placeholder="Número de mesa"
          value={numeroMesaInput}
          onChange={handleNumeroMesaChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleNumeroMesaSubmit}>
          Enviar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MesaModal;
