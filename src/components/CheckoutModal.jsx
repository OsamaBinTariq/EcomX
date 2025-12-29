import { useState } from 'react';
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  TextField, Button, Typography, Box 
} from '@mui/material';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const CheckoutModal = ({ open, onClose }) => {
  const { clearCart } = useCart();
  const { showToast } = useToast();
  
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTimeout(() => {
      clearCart(); 
      showToast('Order placed successfully! Check your email.', 'success'); 
      onClose(); 
    }, 1500);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 'bold', fontFamily: 'monospace' }}>
        COMPLETE YOUR ORDER
      </DialogTitle>
      
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Enter your details to proceed with the payment simulation.
          </Typography>
          
          <TextField 
            autoFocus margin="dense" name="name" label="Full Name" 
            type="text" fullWidth required variant="outlined" 
            onChange={handleChange} sx={{ mb: 2 }}
          />
          <TextField 
            margin="dense" name="email" label="Email Address" 
            type="email" fullWidth required variant="outlined" 
            onChange={handleChange} sx={{ mb: 2 }}
          />
          <TextField 
            margin="dense" name="address" label="Shipping Address" 
            type="text" fullWidth required variant="outlined" 
            multiline rows={3} onChange={handleChange} 
          />
        </DialogContent>

        <DialogActions sx={{ p: 3 }}>
          <Button onClick={onClose} color="inherit">Cancel</Button>
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ bgcolor: '#1f2937', '&:hover': { bgcolor: 'black' } }}
          >
            Pay Now
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CheckoutModal;