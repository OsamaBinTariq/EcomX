import { Container, Typography, Toolbar } from '@mui/material'; 

const Cart = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4, bgcolor: '#f9fafb', minHeight: '100vh' }}>
      
      <Toolbar /> 

      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        Your Shopping Cart
      </Typography>
      
      <Typography variant="body1">
        Cart items will appear here soon...
      </Typography>
    </Container>
  );
};

export default Cart;