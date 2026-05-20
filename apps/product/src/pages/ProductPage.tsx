import { useParams } from "react-router-dom";

import { useProduct } from "@federated-shop/api";

export default function ProductPage() {
  const { id } = useParams();

  const { data: product, error, isLoading } = useProduct(id);

  if (isLoading) {
    return <div>Loading product...</div>;
  }

  if (error) {
    return <div>Error loading product</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>{product.title}</h1>

      <div
        style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 32 }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "100%",
            border: "1px solid #ddd",
            borderRadius: 8,
          }}
        />

        <section>
          <p>{product.description}</p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating}
          </p>

          <button type="button">Add to cart</button>
        </section>
      </div>
    </main>
  );
}
