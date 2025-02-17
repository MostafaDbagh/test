import React from 'react';
import useFetchProducts from '../../hooks/useFetchProduct';
import { Container, Heading, Grid, Card, Image, Title, Price, Loader, ErrorMessage } from './style'; 

const ProductList = () => {
  const { products, loading, error } = useFetchProducts('/products'); 

  if (loading) {
    return <Loader />;  
  }

  return (
    <Container>
      <Heading>Product List</Heading>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>  
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
