import React, { useEffect, useState } from 'react';

function ApiData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realiza la solicitud a la API
    fetch('https://resto-rolling.onrender.com/')
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Almacena los datos en el estado
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, []);

  return (
    <div>
      <h2>Datos de la API</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ApiData;
