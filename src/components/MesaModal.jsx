import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MesaModal({ show, onClose, onSubmit }) {
  const [numeroMesaInput, setNumeroMesaInput] = useState('');

  const handleNumeroMesaChange = (event) => {
    // Utiliza una expresión regular para permitir solo dígitos
    const input = event.target.value.replace(/\D/g, '');
    setNumeroMesaInput(input);
  };

  const handleNumeroMesaSubmit = () => {
    const trimmedInput = numeroMesaInput.trim();
    
    // Valida que el valor consista solo en números y tenga máximo 2 dígitos antes de enviar
    if (/^\d{1,2}$/.test(trimmedInput)) {
      onSubmit(trimmedInput);
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ingresa tu Número de Mesa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          placeholder="Número de mesa"
          value={numeroMesaInput}
          onChange={handleNumeroMesaChange}
          pattern="\d*" // Solo permite dígitos
          maxLength={2} // Limita la longitud máxima a 2
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

export { MesaModal };