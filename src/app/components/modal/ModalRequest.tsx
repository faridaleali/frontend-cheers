import React, { useState } from 'react';
import { useClientData } from "@/app/helpers/ClientDataContext";
import DetalleCompleto from "../../components/detalle/detalle";
    
interface ModalRequestProps {
  isModalOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export default function ModalRequest({
  isModalOpen,
  onClose,
  onContinue,
}: ModalRequestProps) {
  const [showDetalleCompleto, setShowDetalleCompleto] = useState(false);
  const { clientData, setClientData } = useClientData();
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowDetalleCompleto(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const value = e.target.value;
    if (field === 'telefono') {
      // Validar formato de número de teléfono
      const phoneNumberRegex = /^\d{0,10}$/; // Permitir hasta 10 dígitos numéricos
      if (!phoneNumberRegex.test(value)) {
        setPhoneNumberError("El número de teléfono debe tener hasta 10 dígitos.");
      } else {
        setPhoneNumberError("");
      }
    }
    setClientData({ ...clientData, [field]: value });
  };

  const handleCompartirWhatsApp = () => {
    setShowDetalleCompleto(true);
  };

  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-2 sm:px-6 bg-black">
          <div className="flex justify-between items-center pb-3">
            <p className="text-xl sm:text-2xl font-bold text-custom-yellow p-4">
              {!showDetalleCompleto ? 'Elige tu salsa' : null}
            </p>
            <div className="modal-close cursor-pointer pb-4">
              <svg
                onClick={onClose}
                className="fill-current text-white pr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z"></path>
              </svg>
            </div>
          </div>

          {!showDetalleCompleto && (
            <form className="p-4" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-white">Nombre y Apellido</span>
                <input
                  className="form-input mt-1 block w-full border-b-2 border-custom-yellow bg-transparent text-white outline-none"
                  value={clientData.nombre}
                  onChange={(e) => handleChange(e, 'nombre')}
                  required
                  type="text"
                />
              </label>

              <label className="block mt-2">
                <span className="text-white">Teléfono</span>
                <input
                  className="form-input mt-1 block w-full border-b-2 border-custom-yellow bg-transparent text-white outline-none"
                  value={clientData.telefono}
                  onChange={(e) => handleChange(e, 'telefono')}
                  required
                  type="tel"
                />
                {phoneNumberError && (
                  <p className="text-red-500">{phoneNumberError}</p>
                )}
              </label>

              <label className="block mt-2">
                <span className="text-white">Calle</span>
                <input
                  className="form-input mt-1 block w-full border-b-2 border-custom-yellow bg-transparent text-white outline-none"
                  value={clientData.calle}
                  onChange={(e) => handleChange(e, 'calle')}
                  required
                  type="text"
                />
              </label>

              <label className="block mt-2">
                <span className="text-white">Número</span>
                <input
                  className="form-input mt-1 block w-full border-b-2 border-custom-yellow bg-transparent text-white outline-none"
                  value={clientData.numero}
                  onChange={(e) => handleChange(e, 'numero')}
                  required
                  type="text"
                />
              </label>

              <label className="block mt-2">
                <span className="text-white">Piso</span>
                <input
                  className="form-input mt-1 block w-full border-b-2 border-custom-yellow bg-transparent text-white outline-none"
                  value={clientData.piso}
                  onChange={(e) => handleChange(e, 'piso')}
                  required
                  type="text"
                />
              </label>

              <div className="flex justify-center pt-2">
                <button
                  className="px-4 my-6 bg-custom-yellow p-3 rounded-lg text-black hover:bg-custom-yellow hover:text-black mr-2"
                  type="submit"
                  title="El pedido será enviado a Cheers"
                  onClick={handleCompartirWhatsApp}
                >
                  Compartir pedido por WhatsApp
                </button>
              </div>
            </form>
          )}
          {showDetalleCompleto && <DetalleCompleto />}
        </div>
      </div>
    </div>
  );
}
