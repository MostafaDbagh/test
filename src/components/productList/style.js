import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
`;

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

export const Price = styled.p`
  font-size: 1.1rem;
  color: #333;
  font-weight: bold;
`;
export const Loader = styled.div`

position: fixed;
left: 50%;
margin-left: -25px;
 top: 50%;
  border: 8px solid #f3f3f3; 
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;