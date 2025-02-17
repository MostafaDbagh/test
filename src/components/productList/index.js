import React, { useState, useEffect } from 'react';
import { get } from '../../api/axiosConfig';
import { Container, Heading, Grid, Card, Image, Title, Price, Loader, ErrorMessage } from './style'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);      

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await get('/products');
        setProducts(data); 
      } catch (error) {
        setError('Something went wrong! Please try again later.'); 
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);  
      }
    };
    fetchProducts();
  }, []);
  if (loading) {
    return <Loader/>  
  }
  return (
    <Container>
      <Heading>Product List</Heading>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>  // Show error message if fetch failed
      ) : (
        <Grid>
          {products.map((product) => (
            <Card key={product.id}>
              <Image src={product.image} alt={product.title} />
              <Title>{product.title}</Title>
              <Price>${product.price}</Price>
            </Card>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ProductList;
