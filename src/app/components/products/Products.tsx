'use client'
import { Product } from "@/app/interfaces/products.interface";
import { useEffect, useState } from "react";
import CardProduct from "../card-products/CardProduct";
import Productos from '../../../../api/entities/Productos';
import apiClient from "../../../../api/services/apiService";
import ModalRequest from "../modal/ModalRequest";
import { SalsasSeleccion } from "../salsas/SelectionSalsas";
import { useCart } from '@/app/helpers/CartProvider';

export default function ProductsPage() {
  const [openModalRequest, setOpenModalRequest] = useState(false);
  const [openModalSelectBajon, setOpenModalSelectBajon] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<any | null>(null);
  const [summaryText, setSummaryText] = useState("");
  const { cart } = useCart();

  const productosService = new Productos(apiClient);

  const handleAddToCart = (product: Product) => {
    setSelectedProductId(product.id);
    setOpenModalSelectBajon(true);
  };

  const handleContinue = () => {
    setOpenModalRequest(true);
    setOpenModalSelectBajon(false);
  };

  const handleDeniend = () => {
    setSummaryText("Debes elegir un producto")
  };

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await productosService.getProductos();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };
    fetchProductos();
  }, []);

  return (
    <div id="main-products" className="p-4 bg-gray-100">
      <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold text-center text-gray-800 mb-4">
        ELIGE TU BAJÓN
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 pb-4">
        {products.map((product, index) => (
          <CardProduct key={product.id} product={product} onAddToCart={() => handleAddToCart(product)} />
        ))}
      </div>
      <hr className="mb-5 mt-5"></hr>
      <div className="flex flex-row justify-center">
        <h3 className="text-3xl sm:text-4xl md:text-3xl font-bold text-center text-gray-800 mb-4">Tus productos seleccionados</h3>
      </div>

      <SalsasSeleccion/>

      {(
        <div className="items-center justify-center">
          <div className="flex items-center justify-center">
            <button
            className={`flex mt-5 ms-2 font-semibold rounded-full py-5 px-5 text-gray-800 rounded border-2 border-black relative transition-colors duration-200
            ${cart.length > 0 ? 'bg-custom-yellow hover:bg-amber-400' : 'bg-gray-300 cursor-not-allowed'}
            `}
            onClick={cart.length > 0 ? handleContinue : handleDeniend}
            >
            Continuar
            <img 
              src="./cart-black.svg"
              alt="Carrito de compras"
              className="ml-2 h-6 w-auto"
            />
            </button>
          </div>
        </div>
      )}

      {summaryText && (
        <div className="mt-5 items-center justify-center">
          <div className="text-center text-gray-600 mt-2">{summaryText}</div>
        </div>
      )}

      {openModalRequest &&  (
        <ModalRequest
          isModalOpen={openModalRequest}
          onClose={() => {
            setSelectedProductId(selectedProductId);
            setOpenModalRequest(false);
          }}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
}