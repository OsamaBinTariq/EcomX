import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { CartProvider } from './context/CartContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CartProvider>
          <SearchProvider>
            <ToastProvider> 
              <App />
            </ToastProvider>
          </SearchProvider>
        </CartProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)