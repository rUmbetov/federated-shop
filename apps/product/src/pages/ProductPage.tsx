import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  images: string[];
};

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);

    axios
      .get<Product>(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading product...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>{product.title}</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 32 }}>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: '100%',
            border: '1px solid #ddd',
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
