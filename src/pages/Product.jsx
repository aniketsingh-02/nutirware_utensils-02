import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link if you're using React Router

const Product = () => {
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    // Fetch product details
    // Replace this section with your actual data fetching logic
    const fetchProduct = async () => {
      // Example fetch
      const productData = await fetch('your_product_api_endpoint');
      const product = await productData.json();
      setProduct(product);
      setLoading(false);
    };

    // Fetch similar products
    // Replace this section with your actual data fetching logic
    const fetchSimilarProducts = async () => {
      // Example fetch
      const similarProductsData = await fetch('your_similar_products_api_endpoint');
      const products = await similarProductsData.json();
      setSimilarProducts(products);
      setLoading2(false);
    };

    fetchProduct();
    fetchSimilarProducts();
  }, []);

  if (loading || loading2) {
    return <div>Loading...</div>; // Render a loading indicator
  }

  return (
    <div>
      {/* Render the product details */}
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>

      {/* Render similar products */}
      <h3>Similar Products</h3>
      <div>
        {similarProducts.map((similarProduct) => (
          <div key={similarProduct.id}>
            <h4>{similarProduct.title}</h4>
            <p>Price: ${similarProduct.price}</p>
            <img src={similarProduct.image} alt={similarProduct.title} />
            <Link to={`/products/${similarProduct.id}`}>View</Link> {/* Example Link */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
