import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Chip,
  Rating,
  Box,
  CircularProgress,
  Toolbar,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";
import { useToast } from "../context/ToastContext";

const IMAGE_HEIGHT = 240;
const TITLE_LINES = 2;
const LINE_HEIGHT = 1.4;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const { searchTerm, selectedCategory } = useSearch();
  const { showToast } = useToast();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4, bgcolor: "#f9fafb" }}>
      <Toolbar />

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 4,
          fontFamily: "monospace",
          textTransform: "uppercase",
        }}
      >
        {selectedCategory === "all" ? "FRESH DROPS" : selectedCategory}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 4,
        }}
      >
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%", 
              borderRadius: 3,
              border: "1px solid #e5e7eb",
              transition: "0.3s",
              "&:hover": { boxShadow: 6 },
            }}
          >
           
            <Box
              component={Link}
              to={`/product/${product.id}`}
              sx={{
                height: IMAGE_HEIGHT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                bgcolor: "white",
                position: "relative",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.title}
                sx={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />

              <Chip
                label={product.category}
                size="small"
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  textTransform: "capitalize",
                  bgcolor: "rgba(243,244,246,0.9)",
                }}
              />
            </Box>

            
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              
              <Typography
                variant="subtitle1"
                title={product.title}
                sx={{
                  fontWeight: "bold",
                  lineHeight: LINE_HEIGHT,
                  height: `${TITLE_LINES * LINE_HEIGHT}em`,
                  display: "-webkit-box",
                  WebkitLineClamp: TITLE_LINES,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  mb: 1,
                }}
              >
                {product.title}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Rating
                  value={product.rating.rate}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <Typography variant="caption" color="text.secondary">
                  ({product.rating.count})
                </Typography>
              </Box>

              
              <Box sx={{ mt: "auto" }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  ${product.price}
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<AddShoppingCartIcon />}
                  onClick={() => {
                    addToCart(product);
                    showToast("Added to Cart!");
                  }}
                  sx={{
                    bgcolor: "#1f2937",
                    "&:hover": { bgcolor: "black" },
                    textTransform: "none",
                    fontWeight: "bold",
                    py: 1,
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
