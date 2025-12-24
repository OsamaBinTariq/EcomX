import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  InputBase,
  Box,
  Paper,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext"; 
import axios from "axios";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cart } = useCart();
  const { setSearchTerm, selectedCategory, setSelectedCategory } = useSearch(); 
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ textAlign: "center", width: 280, pt: 2 }}>
      <Typography
        variant="h6"
        sx={{ fontFamily: "monospace", fontWeight: 700, mb: 2 }}
      >
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
            sx={{ fontSize: "0.9rem" }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Paper>

        <FormControl fullWidth size="small" sx={{ mt: 2 }}>
          <Select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
            displayEmpty
            sx={{ 
              bgcolor: '#f3f4f6', 
              borderRadius: 2,
              textAlign: 'left',
              textTransform: 'capitalize',
              '& fieldset': { border: '1px solid #e5e7eb' },
            }}
          >
            <MenuItem value="all">All Categories</MenuItem>
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat} sx={{ textTransform: "capitalize" }}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" onClick={handleDrawerToggle}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/cart"
            onClick={handleDrawerToggle}
          >
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={handleDrawerToggle}>
            <ListItemIcon>
              <PersonOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{ bgcolor: "white", color: "#333" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            
            <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
              <IconButton
                sx={{ display: { xs: "flex", lg: "none" }, mr: 1 }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  fontSize: "1.5rem",
                  letterSpacing: "-0.05rem",
                }}
              >
                EcomX
              </Typography>
            </Box>

            
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                flex: 1,
                maxWidth: "700px",
                mx: "auto",
              }}
            >
              
              <FormControl 
                size="small" 
                sx={{ 
                  minWidth: 140, 
                  bgcolor: "#f3f4f6", 
                  borderRadius: "999px 0 0 999px", 
                  borderRight: "1px solid #e5e7eb"
                }}
              >
                <Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  displayEmpty
                  sx={{
                    height: "40px",
                    "& fieldset": { border: "none" }, 
                    fontSize: "0.9rem",
                    textTransform: "capitalize",
                    pl: 1
                  }}
                >
                  <MenuItem value="all">All Categories</MenuItem>
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat} sx={{ textTransform: "capitalize" }}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Paper
                component="form"
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flex: 1,
                  height: "40px",
                  px: 2,
                  bgcolor: "#f3f4f6",
                  borderRadius: "0 999px 999px 0", 
                  border: "1px solid transparent",
                  "&:focus-within": { borderColor: "#d1d5db", bgcolor: "white" },
                  transition: "all 0.3s",
                }}
              >
                <InputBase 
                  placeholder="Search products..." 
                  sx={{ flex: 1 }} 
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchIcon className="text-gray-500" />
              </Paper>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                ml: "auto" 
              }}
            >
              <IconButton sx={{ display: { xs: "none", lg: "flex" } }}>
                <PersonOutlineIcon />
              </IconButton>

              <IconButton component={Link} to="/cart">
                <Badge badgeContent={cart.length} color="error">
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
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;