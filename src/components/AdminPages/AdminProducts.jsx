import React from "react";
import { ProductItem } from "../ProductComponents/ProductItem";
import { ProductTable } from "../ProductComponents/ProductTable";
import { useFetch } from "./useFetch";

function AdminProducts() {
  const { data, loading, error } = useFetch(
    "https://resto-rolling.onrender.com/api/products/list"
  );
  return (
    <>
      <div className="h1 text-center">Administrador de Productos</div>
      {error && <li>Error: {error}</li>}
      {loading && <li>Loading...</li>}
      <ProductTable>
        {data?.map((product) => (
          <ProductItem
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </ProductTable>
    </>
  );
}

export { AdminProducts };
