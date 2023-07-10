'use client';
import { useState } from 'react';
import ModalRequest from './ModalRequest';

export default function ModalSectionBajon() {
    const [isOpen, setIsOpen] = useState(true);
    const [countBM, setCountBM] = useState(0);
    const [countSweetB, setCountSweetB] = useState(0);
    const [countJason, setCountJason] = useState(0);
    const [modalInfo, setModalInfo] = useState(false)

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className="modal-container bg-white w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6 bg-black">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold text-custom-yellow pb-4">Elige tu salsa</p>
                        <div className="modal-close cursor-pointer  pb-4">
                            <svg onClick={() => setIsOpen(false)} className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                viewBox="0 0 18 18">
                                <path
                                    d="M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div >
                        <div className="flex justify-between items-center mx-3 pb-5">
                            <div
                                className="flex justify-between items-center pb-3 mr-6">
                                <button onClick={() => setCountBM(countBM > 0 ? countBM - 1 : 0)}
                                    className="
                                        mr-2 bg-gray-600 
                                        hover:bg-gray-700
                                        text-white
                                        font-bold
                                        py-1 px-2
                                        rounded
                                        focus:outline-none focus:shadow-outline"
                                >-</button>
                                <span
                                    className="mr-2"
                                >{countBM}</span>
                                <button onClick={() => setCountBM(countBM + 1)}
                                    className="mr-2 bg-custom-yellow 
                                    hover:bg-custom-yellow
                                    text-black
                                    font-bold
                                    py-1 px-2
                                    rounded
                                    focus:outline-none focus:shadow-outline"
                                >+</button>
                            </div>
                            <div>
                                <h3
                                    className="text-lg font-bold text-custom-yellow"
                                >BM</h3>
                                <p
                                    className="text-sm text-gray-200"
                                >Mayonesa, Mostaza, Ketchup, Pepinillos y Cebolla</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mx-3 pb-5">
                            <div
                                className="flex justify-between items-center pb-3 mr-6">
                                <button onClick={() => setCountSweetB(countSweetB > 0 ? countSweetB - 1 : 0)}
                                    className="
                                mr-2 bg-gray-600 
                                hover:bg-gray-700
                                text-white
                                font-bold
                                py-1 px-2
                                rounded
                                focus:outline-none focus:shadow-outline"
                                >-</button>
                                <span
                                    className="mr-2"
                                >{countSweetB}</span>
                                <button onClick={() => setCountSweetB(countSweetB + 1)}
                                    className="mr-2 bg-custom-yellow 
                                     hover:bg-custom-yellow
                                     text-black
                                     font-bold
                                     py-1 px-2
                                     rounded
                                     focus:outline-none focus:shadow-outline"
                                >+</button>
                            </div>
                            <div>
                                <h3
                                    className="text-lg font-bold text-custom-yellow"
                                >Sweet B</h3>
                                <p
                                    className="text-sm text-gray-200"
                                >Ketchup, Vinagre y Salsa de Soja.
                                    Es Agridulce!!!</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mx-3 pb-5">
                            <div
                                className="flex justify-between items-center pb-3 mr-6">
                                <button onClick={() => setCountJason(countJason > 0 ? countJason - 1 : 0)}
                                    className="
                                mr-2 bg-gray-600 
                                hover:bg-gray-700
                                text-white
                                font-bold
                                py-1 px-2
                                rounded
                                focus:outline-none focus:shadow-outline"
                                >-</button>
                                <span
                                    className="mr-2"
                                >{countJason}</span>
                                <button onClick={() => setCountJason(countJason + 1)}
                                    className="mr-2 bg-custom-yellow 
                                     hover:bg-custom-yellow
                                     text-black
                                     font-bold
                                     py-1 px-2
                                     rounded
                                     focus:outline-none focus:shadow-outline"
                                >+</button>
                            </div>
                            <div>
                                <h3
                                    className="text-lg font-bold text-custom-yellow"
                                >Jason´s</h3>
                                <p
                                    className="text-sm text-gray-200"
                                >Mayonesa y Barbacoa.
                                    Es un toque picantita!. Guarda!</p>
                            </div>
                        </div>
                        <div
                            className="flex justify-center items-center pb-3">
                            <button
                                className='
                                bg-custom-yellow
                                hover:bg-custom-yellow
                                text-black
                                font-bold
                                py-2 w-full
                                rounded
                                focus:outline-none focus:shadow-outline
                                '
                                onClick={() => {
                                    setModalInfo(true)
                                }}
                            >
                                Siguiente
                            </button>
                        </div>
                        {
                            modalInfo ? (
                                <ModalRequest />
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
