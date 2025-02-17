import { useState, useEffect } from 'react';
import { get } from '../api/axiosConfig';  

const useFetchProducts = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await get(url);
        setProducts(data);
      } catch (error) {
        setError('Something went wrong! Please try again later.');
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url]);  

  return { products, loading, error };
};

export default useFetchProducts;
