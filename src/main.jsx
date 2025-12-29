import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <SearchProvider>
          <ToastProvider> 
            <App />
          </ToastProvider>
        </SearchProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)