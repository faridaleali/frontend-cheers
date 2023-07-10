'use client';
import { useState } from "react";
import { Product, CardProductProps } from "@/app/interfaces/products.interface";
import CardProduct from "../card-products/CardProduct";
import ModalSectionBajon from "../modal/ModalSelectBajon";


export default function ProductsPage() {
const [openModal, setOpenModal] = useState(false);

    const products: Product[] = [
        {
            id: '1',
            title: "Producto 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            price: "$ 100.00",
            imageUrl: "./product1.svg"
        },
        {
            id: '2',
            title: "Producto 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            price: "$ 120.00",
            imageUrl: "./product2.svg"
        },
        {
            id: '3',
            title: "Producto 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            price: "$ 140.00",
            imageUrl: "./product3.svg"
        },
    ];

    return (
        <div className="p-4 bg-gray-100">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">Elige tu bajón</h1>
            <div className="flex flex-col sm:flex-row overflow-x-auto mt-4 pb-4 space-y-4 sm:space-y-0 sm:space-x-4">
                {products.map((product, index) => (
                    <CardProduct key={index} product={product} />
                ))}
            </div>

            <div className="flex items-center justify-center">
                <button className="px-4 py-2 md:px-8 md:py-4 mt-4 flex items-center justify-center bg-custom-yellow text-black rounded transition-colors duration-300"
                    onClick={() => {
                        setOpenModal(!openModal);
                    }}
                >
                    <img src="./cart-black.svg" alt="Carrito de compras" className="mr-2 h-6 w-auto"/>
                    <h2 
                        className="text-sm md:text-xl font-bold"
                    >
                       Quiero mi bajón
                    </h2>
                </button>
            </div>
            {
                openModal && (
                    <ModalSectionBajon />
                )
            }
        </div>
    );
}
