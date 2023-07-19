'use client';
import React, { createContext, useState, useContext } from 'react';
import { Product } from "@/app/interfaces/products.interface";

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product, salsas?: { bm: number; sweetB: number; jasons: number }) => void;
    removeFromCart: (product: Product) => void;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {}
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product, salsas?: { bm: number; sweetB: number; jasons: number }) => {
        if (salsas) {
            console.log(salsas)
            // Agrega las salsas seleccionadas al producto
            product.salsas = salsas;
        }
        setCart(currentCart => [...currentCart, product]);
    };

    const removeFromCart = (product: Product) => {
        setCart(currentCart => currentCart.filter(item => item.id !== product.id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
