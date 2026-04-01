import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export const useShop = () => {
  return useContext(ShopContext);
};

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cakeShop_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('cakeShop_orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Calculate totals
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemsCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('cakeShop_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('cakeShop_orders', JSON.stringify(orders));
  }, [orders]);

  // Cart operations
  const addToCart = (product, size, qty = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id && item.size === size);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prevCart, { ...product, size, quantity: qty }];
    });
  };

  const updateCartQuantity = (productId, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCart(prevCart => 
      prevCart.map(item => 
        (item.id === productId && item.size === size)
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (productId, size) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === productId && item.size === size)));
  };

  const clearCart = () => setCart([]);

  // Orders operations
  const placeOrder = (customerDetails) => {
    const newOrder = {
      id: "ORD-" + Math.floor(Math.random() * 1000000),
      date: new Date().toISOString(),
      customer: customerDetails,
      items: cart,
      total: cartTotal,
      status: "Pending"
    };
    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    return newOrder.id;
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(prev => 
      prev.map(o => o.id === orderId ? { ...o, status } : o)
    );
  };

  const value = {
    cart,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartItemsCount,
    orders,
    placeOrder,
    updateOrderStatus
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};
