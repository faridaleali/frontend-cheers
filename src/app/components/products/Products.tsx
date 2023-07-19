'use client'
import { Product } from "@/app/interfaces/products.interface";
import { useEffect, useState } from "react";
import CardProduct from "../card-products/CardProduct";
import ModalSectionBajon from "../modal/ModalSelectBajon";
import Productos from '../../../../api/entities/Productos';
import apiClient from "../../../../api/services/apiService";
import ModalRequest from "../modal/ModalRequest";

export default function ProductsPage() {
  const [openModalRequest, setOpenModalRequest] = useState(false);
  const [openModalSelectBajon, setOpenModalSelectBajon] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [summaryText, setSummaryText] = useState("");

  const productosService = new Productos(apiClient);

  const handleContinue = () => {
    setOpenModalRequest(true);
    setOpenModalSelectBajon(false);
    setSummaryText("¡Salsas seleccionadas con éxito!");
  };

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await productosService.getProductos();
      setProducts(data);
    };
    fetchProductos();
  }, []);

  const handleAddToCart = (product: Product) => {
    setSelectedProductId(product.id);
    setOpenModalSelectBajon(true);
  };

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold text-center text-gray-800 mb-4">
        ELIGE TU BAJÓN
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 pb-4">
        {products.map((product, index) => (
          <CardProduct key={index} product={product} onAddToCart={(event) => {
            event.preventDefault();
            handleAddToCart(product);
          }} /> 
        ))}
      </div>

      <div className="flex items-center justify-center">
        <button
          className={`flex items-center justify-center px-4 py-2 md:px-8 md:py-4 mt-4 bg-custom-yellow text-black font-semibold rounded-full hover:bg-custom-yellow-hover transition-colors duration-300 
          ${!selectedProductId ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => {
            if(selectedProductId) {
              setOpenModalSelectBajon(true)
            } else {
              // You could show a message to the user here
              console.log("Please select a product first");
            }
          }}
        >
          <img
            src="./cart-black.svg"
            alt="Carrito de compras"
            className="mr-2 h-6 w-auto"
          />
          <span className="text-sm md:text-lg">Agregar a mi pedido</span>
        </button>
      </div>

      {summaryText && (
        <p className="text-center text-gray-600 mt-2">{summaryText}</p>
      )}

      
      {openModalSelectBajon && selectedProductId && (
        <ModalSectionBajon
          productId={selectedProductId}
          isModalOpen={openModalSelectBajon}
          onClose={() => {
            setSelectedProductId(null);
            setOpenModalSelectBajon(false);
          }}
          onSelectSalsas={(salsas) => {
            console.log('Salsas seleccionadas:', salsas);
            setOpenModalRequest(true);
          }}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
}
