// OrderContext.tsx
import React, { createContext, useContext, useState } from 'react';

// Definimos el tipo de los datos del pedido de pollo frito con salsas
type ChickenOrder = {
  product: any; // Aquí deberías especificar el tipo de dato correcto para el producto
  quantity: number;
  salsas: {
    bm: number;
    sweetB: number;
    jasons: number;
  };
};

// Definimos el tipo del contexto
type OrderContextType = {
  orders: ChickenOrder[];
  addOrder: (order: ChickenOrder) => void;
};

// Creamos el contexto
const OrderContext = createContext<OrderContextType>({
  orders: [],
  addOrder: () => {},
});

// Hook personalizado para acceder al contexto
export function useOrderContext() {
  return useContext(OrderContext);
}

// Componente proveedor del contexto
export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<ChickenOrder[]>([]);

  // Función para agregar un pedido al contexto
  const addOrder = (order: ChickenOrder) => {
    setOrders([...orders, order]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
