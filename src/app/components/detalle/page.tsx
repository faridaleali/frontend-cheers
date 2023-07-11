import React, { useEffect } from 'react';
import { useClientData } from "@/app/helpers/ClientDataContext";
import { useCart } from "@/app/helpers/CartProvider";
import { Product } from '@/app/interfaces/products.interface';

const DetalleCompleto = () => {
  const { clientData } = useClientData();
  const { cart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const groupedCart = cart.reduce((acc, product) => {
    if (acc[product.id]) {
      acc[product.id].quantity += 1;
    } else {
      acc[product.id] = { ...product, quantity: 1 };
    }
    return acc;
  }, {} as { [key: string]: ProductWithQuantity });

  const total = Object.values(groupedCart).reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div className="bg-black h-full p-8 text-white">
      <h2 className="text-2xl font-bold text-center mb-4">Detalle del Pedido</h2>
      <hr className="border-white mb-4" />
      
      <div>
        <h3 className="text-xl font-bold">Datos del Cliente</h3>
        <p className="mb-2">Nombre y Apellido: {clientData.nombre}</p>
        <p className="mb-2">Teléfono: {clientData.telefono}</p>
        <p className="mb-2">Calle: {clientData.calle}</p>
        <p className="mb-2">Número: {clientData.numero}</p>
        <p className="mb-4">Piso: {clientData.piso}</p>
      </div>

      <div>
        <h3 className="text-xl font-bold">Productos Seleccionados</h3>
        <ul className="list-disc pl-4 mb-4">
          {Object.values(groupedCart).map((product) => (
            <li key={product.id} className="mb-2">
              {product.title} - ${product.price} (Total: {product.quantity} pedido{product.quantity !== 1 ? 's' : ''})
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold">Total a Pagar</h3>
        <p>${total}</p>
      </div>
    </div>
  );
};

export default DetalleCompleto;

interface ProductWithQuantity extends Product {
  quantity: number;
}
