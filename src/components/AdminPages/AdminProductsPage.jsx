import React from "react";
import { ProductItem } from "../ProductComponents/ProductItem";
import { ProductTable } from "../ProductComponents/ProductTable";
import { useFetch } from "./useFetch";

function AdminProductsPage() {
  const { data, loading, error } = useFetch(
    "https://resto-rolling.onrender.com/api/products/list"
  );
  return (
    <>
      <div className="h1 text-center">Administrador de Productos</div>
      <ProductTable>
        {error && <tr>Error: {error}</tr>}
        {loading && <tr>Loading...</tr>}
        {data?.map((product) => (
          <ProductItem
            key={product.id}
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

export { AdminProductsPage };
