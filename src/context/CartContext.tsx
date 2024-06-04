import React, { createContext, useState, useContext, ReactNode } from 'react';

import {
  ProductSelectMaterial,
  ProductSelectPrinting,
  ProductSelectCoating,
  ProductSelectSpecialTechnic,
  ProductSelectArtwork,
  ProductSelectSimple,
  ProductSelectMeasures,
  ProductSelected,
} from '@/types/productSelect';

// Define the shape of the cart item
interface CartItem {
  id: string;
  productSelected: ProductSelected;
  productSelectMeasures: ProductSelectMeasures;
  productSelectMaterial: ProductSelectMaterial;
  productSelectPrinting: ProductSelectPrinting;
  productSelectCoating: ProductSelectCoating;
  productSelectSpecialTechnics: ProductSelectSpecialTechnic[];
  productSelectArtwork: ProductSelectArtwork;
  productSelectSimple: ProductSelectSimple;
  productSelectRemark: string;
  price: number;
}

// Define the context type
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void; // Remove id from CartItem type
  removeFromCart: (itemId: string) => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Function to generate a simple unique ID
  const generateId = () =>
    `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  const addToCart = (item: Omit<CartItem, 'id'>) => {
    const newItem = { ...item, id: generateId() }; // Generate a new ID for the item
    setCart((prevCart) => [...prevCart, newItem]);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
