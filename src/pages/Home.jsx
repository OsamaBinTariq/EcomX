import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container, Chip, Rating, Box, CircularProgress, Toolbar } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4, bgcolor: '#f9fafb', minHeight: '100vh' }}>
      
      <Toolbar />

      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, fontFamily: 'monospace' }}>
        FRESH DROPS
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} sx={{ display: 'flex' }}>
            
            <Card 
              elevation={0}
              sx={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                borderRadius: 3, 
                border: '1px solid #e5e7eb',
                transition: '0.3s',
                '&:hover': { boxShadow: 6 }
              }}
            >
              <Box sx={{ position: 'relative', p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 250 }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{ 
                    height: '100%', 
                    width: '100%', 
                    objectFit: 'contain'
                  }}
                />
                <Chip 
                  label={product.category} 
                  size="small" 
                  sx={{ position: 'absolute', top: 10, right: 10, textTransform: 'capitalize', bgcolor: 'rgba(243, 244, 246, 0.9)' }}
                />
              </Box>

              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography 
                  variant="subtitle1" 
                  title={product.title}
                  sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    height: '3em',
                    lineHeight: '1.5em'
                  }}
                >
                  {product.title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Rating value={product.rating.rate} precision={0.5} size="small" readOnly />
                  <Typography variant="caption" color="text.secondary">
                    ({product.rating.count})
                  </Typography>
                </Box>
                
                <Box sx={{ flexGrow: 1 }} />

                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                  ${product.price}
                </Typography>
              </CardContent>

              <Box sx={{ p: 2, pt: 0 }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  startIcon={<AddShoppingCartIcon />}
                  sx={{ 
                    bgcolor: '#1f2937', 
                    '&:hover': { bgcolor: 'black' },
                    textTransform: 'none',
                    fontWeight: 'bold',
                    py: 1
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;