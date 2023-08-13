'use client'
import React, { createContext, useContext, useState } from 'react';

type Cliente = {
  nombre: string;
  telefono: string;
  calle: string;
  numero: string;
  piso: string;
  pago: string;
  efectivo: string;
};

type ClientDataContextType = {
  clientData: Cliente;
  setClientData: React.Dispatch<React.SetStateAction<Cliente>>;
};

const ClientDataContext = createContext<ClientDataContextType | undefined>(undefined);

export const useClientData = () => {
  const context = useContext(ClientDataContext);
  if (!context) {
    throw new Error('useClientData debe ser utilizado dentro de un ClientDataProvider');
  }
  return context;
};

export const ClientDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clientData, setClientData] = useState<Cliente>({
    nombre: '',
    telefono: '',
    calle: '',
    numero: '',
    piso: '',
    pago: '',
    efectivo: ''
  });

  return (
    <ClientDataContext.Provider value={{ clientData, setClientData }}>
      {children}
    </ClientDataContext.Provider>
  );
};
