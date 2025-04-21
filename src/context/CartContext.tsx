
import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Product } from "@/types/types";
import { toast } from "sonner";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }
  }, []);

  // Recalculate totals whenever cart changes
  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    setCartTotal(total);
    setCartCount(count);
    
    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prevCart) => {
      // Check if product already exists in cart
      const existingItemIndex = prevCart.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex !== -1) {
        // Update quantity if product already in cart
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        toast(`Updated quantity in cart`, {
          description: product.name,
        });
        return updatedCart;
      } else {
        // Add new item to cart
        toast(`Added to cart`, {
          description: product.name,
        });
        return [...prevCart, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item.product.id !== productId);
      if (updatedCart.length !== prevCart.length) {
        toast("Item removed from cart");
      }
      return updatedCart;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart((prevCart) => {
      return prevCart.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const clearCart = () => {
    setCart([]);
    toast("Cart cleared");
  };

  return (
    <CartContext.Provider 
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
