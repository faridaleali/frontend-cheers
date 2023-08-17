'use client';
import React, { createContext, useState, useContext } from 'react';
import { Product } from "@/app/interfaces/products.interface";

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product, salsas?: { bm: number; sweetB: number; jasons: number }, carritoId?: number) => void;
    removeFromCart: (product: Product) => void;
    updateProductInCart: (productId: string, updatedProduct: Product[]) => void; // Agregamos esta función
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

    const addToCart = (product: Product, salsas?: { bm: number; sweetB: number; jasons: number }, carritoId?: number) => {
        if (salsas) {
            console.log(salsas)
            product.salsas = salsas;
            console.log(product)
        }

        if(carritoId) {
            product.carritoId = carritoId
        }

        setCart(currentCart => [...currentCart, product]);
    };

    const removeFromCart = (product: Product) => {
        setCart(currentCart => {
          const index = currentCart.findIndex(item => item.id === product.id);
          if (index !== -1) {
            const updatedCart = [...currentCart];
            updatedCart.splice(index, 1);
            return updatedCart;
          }
          return currentCart;
        });
    };

    const updateProductInCart = (productId: string, updatedProduct: Product) => {
        setCart((currentCart) => {
          const updatedCart = currentCart.map((item) => {
            if (item.id === productId) {
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
