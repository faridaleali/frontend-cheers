import { useState, useEffect, useCallback } from 'react';
import { useCart } from '@/app/helpers/CartProvider';
import { Salsas, Product } from '@/app/interfaces/products.interface';

interface SalsasSeleccionProps {
  onSalsaSelection: (salsas: Salsas) => void;
  productId: string | null;
}

export const SalsasSeleccion: React.FC<SalsasSeleccionProps> = ({ onSalsaSelection, productId }) => {
  const { cart, updateProductInCart } = useCart();

  const handleIncrement = (productoId: string, Salsa: string) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productoId) {
        const updatedProduct = { 
          ...product
        }; 
        
        if (Salsa === "BM") {
          updatedProduct.salsas.bm += 1;
        } else if (Salsa === "SW") {
          updatedProduct.salsas.sweetB += 1;
        } else if (Salsa === "JS") {
          updatedProduct.salsas.jasons += 1;
        }

        updateProductInCart(productoId, updatedProduct);

        return updatedProduct;
      }
      return product;
    });
  };

  const handleDecrement = (productoId: string, Salsa: string) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productoId) {
        const updatedProduct = { ...product };
        
        if (Salsa === "BM" && updatedProduct.salsas.bm > 0) {
          updatedProduct.salsas.bm -= 1;
        } else if (Salsa === "SW" && updatedProduct.salsas.sweetB > 0) {
          updatedProduct.salsas.sweetB -= 1;
        } else if (Salsa === "JS" && updatedProduct.salsas.jasons > 0) {
          updatedProduct.salsas.jasons -= 1;
        }

        updateProductInCart(productoId, updatedProduct);

        return updatedProduct;
      }
      return product;
    });
  };

  return (
    <div className="flex flex-col bg-black p-4 mt-4 rounded-lg shadow-lg font-semibold text-custom-yellow">
      <h2 className="flex flex-row justify-center text-xl font-semibold mb-4">Selecciona tus salsas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 pb-4">
        {cart.map((product) => (
          <div key={product.id} className="flex flex-col items-center font-semibold border border-white rounded-lg p-2 shadow-outline">
            <h2 className="mb-3 mt-0 text-center">{product.nombre}</h2>
            <div>
              <img 
              src={product.imageUrl}
              alt={product.descripcion} 
              className='w-15'
              />
              <div className='flex flex-row mt-4 justify-center'>
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-center'>
                    <h3 className="text-lg font-bold text-custom-yellow ">BM</h3>
                  </div>
                  <div className='flex flex-row mr-2'>
                  <button
                    onClick={() => handleDecrement(product.id, "BM")}
                    className="
                      bg-gray-600 
                      hover:bg-gray-700
                      text-white
                      font-bold
                      py-1 px-2
                      rounded
                      focus:outline-none focus:shadow-outline"
                    >
                    -
                    </button>
                    <span className="mx-2">{product.salsas.bm}</span>
                    <button
                      onClick={() => handleIncrement(product.id, "BM")}
                      className="bg-custom-yellow 
                        hover:bg-custom-yellow
                        text-black
                        font-bold
                        py-1 px-2
                        rounded
                        focus:outline-none focus:shadow-outline"
                    >
                    +
                    </button>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-center'>
                    <h3 className="text-lg font-bold text-custom-yellow">Sweet B</h3>
                  </div>
                  <div className='flex flex-row'>
                    <button
                      onClick={() => handleDecrement(product.id, "SW")}
                      className="
                        bg-gray-600 
                        hover:bg-gray-700
                        text-white
                        font-bold
                        py-1 px-2
                        rounded
                        focus:outline-none focus:shadow-outline"
                    >
                    -
                    </button>
                    <span className="mx-2">{product.salsas.sweetB}</span>
                    <button
                      onClick={() => handleIncrement(product.id, "SW")}
                      className="mr-2 bg-custom-yellow 
                        hover:bg-custom-yellow
                        text-black
                        font-bold
                        py-1 px-2
                        rounded
                        focus:outline-none focus:shadow-outline"
                    >
                    +
                    </button>
                  </div>
                </div>
                  <div className='flex flex-col'>
                  <h3 className="text-lg font-bold text-custom-yellow">Jason B</h3>
                  <div className='flex flex-row'>
                  <button
                    onClick={() => handleDecrement(product.id, "JS")}
                    className="
                      mr-2 bg-gray-600 
                      hover:bg-gray-700
                      text-white
                      font-bold
                      py-1 px-2
                      rounded
                      focus:outline-none focus:shadow-outline"
                  >
                  -
                  </button>
                  <span className="mr-2">{product.salsas.jasons}</span>
                  <button
                    onClick={() => handleIncrement(product.id, "JS")}
                    className="mr-2 bg-custom-yellow 
                      hover:bg-custom-yellow
                      text-black
                      font-bold
                      py-1 px-2
                      rounded
                      focus:outline-none focus:shadow-outline"
                  >
                  +
                </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface SalsasSeleccionProps {
  onSalsaSelection: (salsas: Salsas) => void;
  productId: string | null;
}