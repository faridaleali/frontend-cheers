'use client'
import { useEffect } from 'react';
import { useClientData } from "@/app/helpers/ClientDataContext";
import { useCart } from "@/app/helpers/CartProvider";
import { Product } from '@/app/interfaces/products.interface';
import Image from 'next/image';

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

  /* Envios de pedido a WhatsApp */

  const pedidosWhatsapp = () => {

    const pedidoStrings = Object.values(groupedCart).map((product) => {
      return `• ${product.nombre} - ${product.precio} (Total: ${product.quantity}) BM:${product.salsas.bm} SB:${product.salsas.sweetB} JS:${product.salsas.jasons}`;
    });
  
    const pedidoTexto = pedidoStrings.join("\n");
  
    return pedidoTexto;
  };

  console.log(clientData)
  console.log(clientData.efectivo)

  const pedidoTexto = pedidosWhatsapp();

  const mensajeWhatsApp: string = `⚡Holaaa buenas noches, muchas gracias por elegirnos, envíanos tu pedido ⚡
  
  En el caso que transfieras, mándanos el comprobante por favor 🏍️🔥

  Nombre y Apellido: ${clientData.nombre}
  Teléfono: ${clientData.telefono}
  Calle: ${clientData.calle}
  Número: ${clientData.numero}
  Piso: ${clientData.piso}
  Metodo de pago: ${clientData.forma}

  Detalle del pedido: \n${pedidoTexto}

  Precio total:  [ $ ${clientData.efectivo} (Costo envio incluido + $500)  ]`;

  const numeroWhasApp: string = "5493811234567"

  const apiWhatsApp: string = `https://api.whatsapp.com/send?phone=${numeroWhasApp}&text=${encodeURIComponent(mensajeWhatsApp)}`;

  const handleEnviarPedido = () => {
    window.open(apiWhatsApp, '_blank')
  };

  /* DOM */

  return (
    <div className="bg-black h-full text-white p-0">
      <h2 className="text-2xl font-bold text-center mb-2">Pedido enviado ✅</h2>
      <h3 className=" font-bold text-center mb-1">Detalle del Pedido</h3>
      <hr className="border-white mb-4" />
      
      <div>
        <h3 className="text-xl font-bold mb-1">Datos del Cliente</h3>
        <p className="mb-1">Nombre y Apellido: {clientData.nombre}</p>
        <p className="mb-1">Teléfono: {clientData.telefono}</p>
        <p className="mb-1">Calle: {clientData.calle}</p>
        <p className="mb-1">Número: {clientData.numero}</p>
        <p className="mb-1">Piso: {clientData.piso}</p>
        <p className="mb-2">Forma de pago: {clientData.forma}</p>
      </div>

      <div>
        <h3 className="text-xl font-bold">Productos Seleccionados</h3>
        {<ul className="list-disc pl-4 mb-4">
          {Object.values(groupedCart).map((product) => (
            <li key={product.id} className="mb-2">
              {product.nombre} - ${product.precio} | Cantidad: {product.cantidad} | BM: {product.salsas.bm} SweetB: {product.salsas.sweetB} Jason : {product.salsas.jasons}
            </li>
          ))}
          </ul>}
      </div>

      <div>
        <h3 className="text-xl font-bold">Total a Pagar</h3>
        <p>${clientData.efectivo} Envio incluido ($500)</p>
      </div>
      <div className='flex justify-center'>
        <button className="flex mt-5 text-black font-semibold rounded-md bg-yellow-400 p-4" id="btnEnviarPedido" onClick={handleEnviarPedido}>
          Seguir el pedido por WP
          <Image
            src="./whatsapp.svg" 
            alt="Whatsapp" 
            width={12}
            height={12}
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
