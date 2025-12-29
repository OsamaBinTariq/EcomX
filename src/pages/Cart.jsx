import { useState } from "react";
import CheckoutModal from "../components/CheckoutModal";
import {
  Container,
  Typography,
  Toolbar,
  Grid,
  Card,
  Button,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const { showToast } = useToast();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Container
      maxWidth="xl"
      sx={{ py: 4, bgcolor: "#f9fafb", minHeight: "100vh" }}
    >
      <Toolbar />

      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 4, fontFamily: "monospace" }}
      >
        YOUR SHOPPING CART
      </Typography>

      {cart.length === 0 ? (
        <Box sx={{ textAlign: "center", mt: 10 }}>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            Your cart is currently empty.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/"
            sx={{ bgcolor: "#1f2937" }}
          >
            Go Shopping
          </Button>
        </Box>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {cart.map((item) => (
              <Card
                key={item.id}
                sx={{ mb: 2, display: "flex", alignItems: "center", p: 2 }}
              >
                <Box sx={{ width: 100, height: 100, mr: 2, flexShrink: 0 }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${item.price} x {item.quantity}
                  </Typography>
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>

                <IconButton
                  color="error"
                  onClick={() => {
                    removeFromCart(item.id);
                    showToast("Item removed from cart", "warning");
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Card>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, position: "sticky", top: "100px" }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Order Summary
              </Typography>
              <Divider sx={{ my: 2 }} />

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography>Subtotal</Typography>
                <Typography fontWeight="bold">
                  ${totalPrice.toFixed(2)}
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Typography>Shipping</Typography>
                <Typography color="success.main">Free</Typography>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6" fontWeight="bold">
                  ${totalPrice.toFixed(2)}
                </Typography>
              </Box>

              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={() => setIsCheckoutOpen(true)} 
                sx={{ bgcolor: "#1f2937", "&:hover": { bgcolor: "black" } }}
              >
                Checkout
              </Button>
            </Card>
          </Grid>
        </Grid>
      )}

      <CheckoutModal 
        open={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />

    </Container>
  );
};

export default Cart;