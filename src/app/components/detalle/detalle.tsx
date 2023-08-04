'use client'
import { useEffect } from 'react';
import { useClientData } from "@/app/helpers/ClientDataContext";
import { useCart } from "@/app/helpers/CartProvider";
import { Product } from '@/app/interfaces/products.interface';

const DetalleCompleto = () => {
  const { clientData } = useClientData();
  const { cart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Revisar logica de esta funcion

  const groupedCart = cart.reduce((acc, product) => {
    if (acc[product.id]) {
      acc[product.id].quantity += 1;
    } else {
      acc[product.id] = { ...product, quantity: 1 };
    }
    return acc;
  }, {} as { [key: string]: ProductWithQuantity });

  const total = Object.values(groupedCart).reduce((acc, product) => acc + (product.precio * product.quantity), 0);

  /* Envios de pedido a WhatsApp */

  const pedidosWhatsapp = () => {

    const pedidoStrings = Object.values(groupedCart).map((product) => {
      return `• ${product.nombre} - ${product.precio} (Total: ${product.quantity})`;
    });
  
    const pedidoTexto = pedidoStrings.join("\n");
  
    return pedidoTexto;
  };

  const pedidoTexto = pedidosWhatsapp();

  const mensajeWhatsApp: string = `Hola los datos de mi pedido son:
  Nombre y Apellido: ${clientData.nombre}
  Teléfono: ${clientData.telefono}
  Calle: ${clientData.calle}
  Número: ${clientData.numero}
  Piso: ${clientData.piso}
  Pedido: \n${pedidoTexto}
  `;

  const numeroWhasApp: string = "5493816252587"

  const apiWhatsApp: string = `https://api.whatsapp.com/send?phone=${numeroWhasApp}&text=${encodeURIComponent(mensajeWhatsApp)}`;

  const handleEnviarPedido = () => {
    window.open(apiWhatsApp, '_blank')
  };

  /* DOM */

  return (
    <div className="bg-black h-full text-white p-0">
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
              {product.nombre} - ${product.precio} (Total: {product.quantity} pedido{product.quantity !== 1 ? 's' : ''})
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold">Total a Pagar</h3>
        <p>${total}</p>
      </div>
      <div className='flex justify-center'>
        <button className="flex mt-5 text-black font-semibold rounded-md bg-yellow-400 p-4" id="btnEnviarPedido" onClick={handleEnviarPedido}>
          Enviar pedido y confirmar en WP
          <img
            src="./whatsapp.svg" 
            alt="Whatsapp" 
            className="flex ms-2 justify-center m-auto h-6 w-auto" 
          />
        </button>
      </div>
    </div>
  );
};

export default DetalleCompleto;

interface ProductWithQuantity extends Product {
  quantity: number;
}
