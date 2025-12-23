import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, InputBase, Box, Paper, Container, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ textAlign: 'center', width: 280, pt: 2 }}>
      
      <Typography variant="h6" sx={{ fontFamily: 'monospace', fontWeight: 700, mb: 2 }}>
        EcomX
      </Typography>
      
      <Box sx={{ px: 2, mb: 2 }}>
        <Paper 
          component="form"
          elevation={0}
          className="flex items-center px-3 py-1 rounded-full bg-gray-100 border border-gray-200"
        >
          <SearchIcon className="text-gray-400" />
          <InputBase
            placeholder="Search..."
            className="ml-2 flex-1"
            sx={{ fontSize: '0.9rem' }}
          />
        </Paper>
      </Box>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" onClick={handleDrawerToggle}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/cart" onClick={handleDrawerToggle}>
            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={handleDrawerToggle}>
            <ListItemIcon><PersonOutlineIcon /></ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={1} sx={{ bgcolor: 'white', color: '#333' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              
              <IconButton 
                sx={{ display: { xs: 'flex', lg: 'none' }, mr: 1 }}
                onClick={handleDrawerToggle}
              >
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
              sx={{ 
                display: { xs: 'none', lg: 'flex' }, 
                width: '500px',
                alignItems: 'center',
                px: 2, py: 0.5,
                borderRadius: '999px',
                bgcolor: '#f3f4f6',
                border: '1px solid transparent',
                '&:focus-within': { borderColor: '#d1d5db', bgcolor: 'white' },
                transition: 'all 0.3s'
              }} 
            >
              <SearchIcon className="text-gray-500 mr-2" />
              <InputBase
                placeholder="Search products..."
                sx={{ flex: 1 }}
              />
            </Paper>

            
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            
              <IconButton sx={{ display: { xs: 'none', lg: 'flex' } }}>
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

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} 
        sx={{
          display: { xs: 'block', lg: 'none' }, 
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;