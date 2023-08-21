'use client';
import React, { createContext, useState, useContext } from 'react';
import { Product } from "@/app/interfaces/products.interface";

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product, salsas?: { bm: number; sweetB: number; jasons: number }) => void;
    removeFromCart: (product: Product) => void;
    updateProductInCart: (productId: number, updatedProduct: Product) => void; // Agregamos esta función
    clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    updateProductInCart: () => {},
    clearCart: () => {}
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product, salsas?: { bm: number; sweetB: number; jasons: number }) => {
      if (salsas) {
          product.salsas = salsas;
      }

      if (cart.find(item => item.id === product.id)) 
      {
        const updatedCart = cart.map(item => item.id === product.id 
          ? {...item, cantidad: product.cantidad + 1}
          : item )

        return setCart([...updatedCart])
      }

      setCart(currentCart => [...currentCart, product]);

    };

    const removeFromCart = (productToRemove: Product) => {
      setCart(currentCart => 
      {
        const updatedCart = currentCart.map(item => 
          item.id === productToRemove.id && item.cantidad > 0
            ? {...item, cantidad: item.cantidad - 1}
            : item
        );
    
        const index = updatedCart.findIndex(item => item.id === productToRemove.id);
        if (index !== -1 && updatedCart[index].cantidad === 0) {
          updatedCart.splice(index, 1);
        }
    
        return updatedCart;
      });
    };
    

    const updateProductInCart = (productoId: number, updatedProduct: Product) => {
        setCart((currentCart) => {
          const updatedCart = currentCart.map((item) => {
            if (item.id === productoId) {
              return updatedProduct;
            }
            return item;
          });
          return updatedCart;
        });
      };
      
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateProductInCart, clearCart }}>
          {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
