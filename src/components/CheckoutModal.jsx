import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice"; 

import { useToast } from "../context/ToastContext";

const CheckoutModal = ({ open, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", address: "" });

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    
    showToast("Order Placed Successfully!");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Checkout</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">Total Amount: ${totalPrice.toFixed(2)}</Typography>
            <Typography variant="body2" color="text.secondary">Items: {cartItems.length}</Typography>
          </Box>
          <TextField
            autoFocus margin="dense" label="Name" fullWidth required
            value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            margin="dense" label="Email" type="email" fullWidth required
            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <TextField
            margin="dense" label="Address" fullWidth required multiline rows={3}
            value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">Place Order</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CheckoutModal;