'use client'
import { useState } from 'react';
import { Product, CardProductProps } from '../../interfaces/products.interface';

export default function CardProduct({product}: CardProductProps) {
    const [quantity, setQuantity] = useState(0); // Mantener el estado de la cantidad

    const increaseQuantity = () => setQuantity(quantity + 1); // Función para incrementar la cantidad
    const decreaseQuantity = () => quantity > 0 && setQuantity(quantity - 1); // Función para disminuir la cantidad

    return (
        <div className="flex flex-col justify-between p-5 w-full bg-black text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={product.imageUrl} alt="Product" className="w-full h-64 object-cover object-center rounded-xl" />
            <div className="flex justify-between items-center w-full mt-4">
                <h1 className="text-2xl font-bold text-custom-yellow mt-4">{product.title}</h1>
                <p className="text-xl font-bold">{product.price}</p>
            </div>
            <p className="mt-2 text-gray-100">{product.description}</p>
            <div className="flex justify-between items-center w-full mt-4">
                <div>
                    <button onClick={decreaseQuantity} className="px-3 py-2 border border-gray-500 text-custom-yellow rounded-l hover:bg-gray-500 hover:text-white">-</button>
                    <span className="px-3 py-2 border border-t-0 border-b-0 border-gray-500 text-white">{quantity}</span>
                    <button onClick={increaseQuantity} className="px-3 py-2 border bg-custom-yellow border-gray-500 text-gray-500 rounded-r ">+</button>
                </div>
                <button className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-500 transition-colors duration-300 relative">
                    <img src="./cart.svg" alt="" />
                    {quantity > 0 && <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">{quantity}</span>}
                </button>
            </div>
        </div>
    )
}
