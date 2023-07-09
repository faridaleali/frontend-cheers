'use client';

import { useState } from 'react';

export default function ModalRequest () {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className="modal-container bg-white w-1/2 md:w-1/3 lg:w-1/4 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6 bg-black">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold text-custom-yellow pb-4">Tus Datos</p>
                        <div className="modal-close cursor-pointer pb-4">
                            <svg onClick={() => setIsOpen(false)} className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                viewBox="0 0 18 18">
                                <path
                                    d="M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z">
                                </path>
                            </svg>
                        </div>
                    </div>

                    <form>
                        <label className="block">
                            <span className="text-white">Nombre y Apellido</span>
                            <input className="form-input mt-1 block w-full border-b-2 border-custom-yellow bg-transparent text-white outline-none"  />
                        </label>

                        <label className="block mt-2">
                            <span className="text-white">Teléfono</span>
                            <input className="form-input mt-1 block w-full border-b-2 border-custom-yellow bg-transparent text-white outline-none"  />
                        </label>

                        <label className="block mt-2">
                            <span className="text-white">Calle</span>
                            <input className="form-input mt-1 block w-full border-b-2 border-custom-yellow bg-transparent text-white outline-none"  />
                        </label>

                        <label className="block mt-2">
                            <span className="text-white">Número</span>
                            <input className="form-input mt-1 block w-full border-b-2 border-custom-yellow bg-transparent text-white outline-none" />
                        </label>

                        <label className="block mt-2">
                            <span className="text-white">Piso</span>
                            <input className="form-input mt-1 block w-full border-b-2 border-custom-yellow bg-transparent text-white outline-none" />
                        </label>

                        <div className="flex justify-center pt-2">
                            <button
                                className="px-4 my-6 bg-custom-yellow p-3 rounded-lg text-black hover:bg-custom-yellow hover:text-black mr-2">Compartir pedido por whatsapp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
