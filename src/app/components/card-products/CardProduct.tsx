'use client'
import { useState } from 'react';
import { useCart } from '@/app/helpers/CartProvider';
import { CardProductProps } from '../../interfaces/products.interface';

export default function CardProduct({ product, onAddToCart }: CardProductProps) {
  const { addToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(quantity >= 2) {
      return setQuantity(quantity);
    }

    setQuantity(quantity + 1);
    addToCart(product);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart(product);
    }
  };

  return (
    <div className="flex flex-col justify-between p-5 w-full bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.imageUrl}
        alt="Product"
        className="w-full h-64 object-cover object-center rounded-t-lg"
      />
      <div className="flex justify-between items-center w-full pt-4">
        <h1 className="text-xl font-bold">{product.nombre}</h1>
        <p className="text-xl font-bold text-black rounded bg-custom-yellow p-4">${Number(product.precio).toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
      </div>
      <p className="mt-2 text-gray-600">{product.descripcion}</p>
      <hr className="mt-5"/>
      <div className="flex justify-between items-center w-full mt-4">
        <div className='font-semibold'>
          Cantidad
        </div>
        <div>
          <button
            onClick={decreaseQuantity}
            className="px-4 py-2 border border-gray-300 text-gray-500 rounded-l hover:bg-gray-200 hover:text-gray-600 transition-colors duration-300"
          >
            -
          </button>
          <span className="px-4 py-2 border border-t-0 border-b-0 border-gray-300 text-gray-800">
            {quantity}
          </span>
          <button
            onClick={increaseQuantity}
            className="px-4 py-2 border bg-custom-yellow border-gray-300 text-gray-500 rounded-r hover:bg-custom-yellow-hover transition-colors duration-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}