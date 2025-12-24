import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Grid, Typography, Button, Box, Rating, CircularProgress, Chip, Toolbar, Divider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    // Fetch single product data
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!product) return <Typography>Product not found</Typography>;

  return (
    <Container maxWidth="lg" sx={{ py: 4, bgcolor: '#fff', minHeight: '100vh' }}>
      <Toolbar /> 
      
      <Grid container spacing={6}>
        
        <Grid item xs={12} md={6}>
          <Box sx={{ 
            height: '500px', 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            p: 4,
            border: '1px solid #f0f0f0',
            borderRadius: 2
          }}>
            <img 
              src={product.image} 
              alt={product.title} 
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Chip label={product.category} sx={{ textTransform: 'capitalize', mb: 2 }} />
          
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {product.title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            <Rating value={product.rating.rate} precision={0.5} readOnly />
            <Typography variant="body2" color="text.secondary">
              ({product.rating.count} reviews)
            </Typography>
          </Box>

          <Typography variant="h3" color="primary.main" fontWeight="bold" sx={{ mb: 3 }}>
            ${product.price}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'text.secondary', mb: 4 }}>
            {product.description}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => addToCart(product)}
              startIcon={<AddShoppingCartIcon />}
              sx={{ 
                bgcolor: '#1f2937', 
                '&:hover': { bgcolor: 'black' },
                px: 4, py: 1.5
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
};

export default ProductDetails;