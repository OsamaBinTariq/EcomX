import { AppBar, Toolbar, Typography, IconButton, Badge, InputBase, Box, Paper, Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="fixed" elevation={1} sx={{ bgcolor: 'white', color: '#333' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <IconButton className="md:hidden mr-2">
              <MenuIcon />
            </IconButton>
            
            <Typography 
              variant="h6" 
              component={Link} 
              to="/" 
              sx={{ 
                textDecoration: 'none', 
                color: 'inherit',       
                fontWeight: 'bold',
                fontFamily: 'monospace',
                fontSize: '1.5rem',
                letterSpacing: '-0.05rem'
              }}
            >
              EcomX
            </Typography>
          </Box>

          <Paper 
            component="form"
            elevation={0}
            className="hidden md:flex items-center px-4 py-1.5 rounded-full bg-gray-100 border"
            sx={{ width: '400px' }} 
          >
            <SearchIcon className="text-gray-500 mr-2" />
            <InputBase
              placeholder="Search products..."
              sx={{ flex: 1 }}
              inputProps={{ 'aria-label': 'search products' }}
            />
          </Paper>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <IconButton>
              <PersonOutlineIcon />
            </IconButton>

            <IconButton component={Link} to="/cart">
              <Badge badgeContent={0} color="error">
                 <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;