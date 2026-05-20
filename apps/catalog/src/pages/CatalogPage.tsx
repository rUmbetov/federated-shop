import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export default function CatalogPage() {
  const [data, setData] = useState<ProductsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((products: ProductsResponse) => {
        setData(products);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Catalog Remote</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
        }}
      >
        {data?.products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <article
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: 16,
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{
                  width: "100%",
                  height: 120,
                  objectFit: "cover",
                }}
              />

              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
