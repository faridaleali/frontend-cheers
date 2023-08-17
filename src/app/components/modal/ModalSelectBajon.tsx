import React, { useEffect, useState } from 'react';
import { useCart } from '@/app/helpers/CartProvider';
import { Product, Salsas } from '@/app/interfaces/products.interface';

interface ModalSelectBajonProps {
  isModalOpen: boolean;
  onClose: () => void;
  onSelectSalsas: (salsas: Salsas) => void;
  onContinue: () => void;
  productId: string | null; // Agregar la nueva propiedad aquí
}

const ModalSectionBajon: React.FC<ModalSelectBajonProps> = ({
  isModalOpen,
  onClose,
  onSelectSalsas,
  onContinue,
  productId, // <- Nueva propiedad para el producto seleccionado
}) => {
  const { cart, addToCart } = useCart();
  const [cartProducts, setCartProducts] = useState<Product[]>(cart);
  const [countBM, setCountBM] = useState(0);
  const [countSweetB, setCountSweetB] = useState(0);
  const [countJason, setCountJason] = useState(0);

  const groupedCart = cart.reduce((acc, product) => {
    if (acc[product.id]) {
      acc[product.id].quantity += 1
    } else {
      acc[product.id] = { ...product, quantity: 1};
    }
    return acc;
  }, {} as { [key: string]: ProductWithQuantity });

  const totalProductos = Object.values(groupedCart).reduce( (acc, product) => acc + product.quantity, 0);
  
  const salsasGratisDisponibles = 2 * parseInt(totalProductos.toString(), 10);
  const [salsasAdicionales, setSalsasAdicionales] = useState(0);
  const costoSalsasAdicionales = 100;
  const [costoSalsasExtras, setCostoSalsasExtras] = useState(0);
  const [salsasGratisSeleccionadas, setSalsasGratisSeleccionadas] = useState(salsasGratisDisponibles);

  useEffect(() => {
    setCartProducts(cart);
  }, [cart]);
  
  const increaseCount = (setter: React.Dispatch<React.SetStateAction<number>>, count: number) => {
    const totalSalsas = countBM + countSweetB + countJason + 1;

    if (totalSalsas <= 5) {
      setter(count + 1);

      if (totalSalsas > salsasGratisDisponibles) {
        const salsasExtras = totalSalsas - salsasGratisDisponibles;
        setCostoSalsasExtras(salsasExtras * costoSalsasAdicionales);
      } else {
        setCostoSalsasExtras(0);
      }

      if (totalSalsas <= salsasGratisDisponibles) {
        setSalsasGratisSeleccionadas(salsasGratisDisponibles - totalSalsas);
      } else {
        setSalsasGratisSeleccionadas(0);
      }
    }
    
    const updatedCartProducts = cartProducts.map((producto) => {
      if (producto.id === productId) { // <- Solo actualiza el producto seleccionado
        return {
          ...producto,
          salsas: {
            bm: countBM,
            sweetB: countSweetB,
            jasons: countJason,
          },
        };
      }
      return producto;
    });
    console.log(updatedCartProducts)
    setCartProducts(updatedCartProducts);
  };

  const decreaseCount = (setter: React.Dispatch<React.SetStateAction<number>>, count: number) => {
    if (count > 0) {
      setter(count - 1);
      
      const totalSalsas = countBM + countSweetB + countJason - 1;
      if (totalSalsas < salsasGratisDisponibles) {
        setSalsasGratisSeleccionadas(salsasGratisDisponibles - totalSalsas);
      } else if (totalSalsas <= salsasGratisDisponibles + salsasAdicionales) {
        setSalsasAdicionales(totalSalsas - salsasGratisDisponibles);
        setSalsasGratisSeleccionadas(0);
        setCostoSalsasExtras(0);
      } else {
        const salsasExtras = totalSalsas - salsasGratisDisponibles;
        setSalsasAdicionales(salsasGratisDisponibles);
        setSalsasGratisSeleccionadas(0);
        setCostoSalsasExtras(salsasExtras * costoSalsasAdicionales);
      }
    }
    const updatedCartProducts = cartProducts.map((producto) => {
      if (producto.id === productId) {
        return {
          ...producto,
          salsas: {
            bm: countBM,
            sweetB: countSweetB,
            jasons: countJason,
          },
        };
      }
      return producto;
    });
    setCartProducts(updatedCartProducts);
  };

  const handleConfirm = () => {
    const salsas = {
      bm: countBM,
      sweetB: countSweetB,
      jasons: countJason,
    };
  
    const salsasGratisRestantes = salsasGratisDisponibles - salsasGratisSeleccionadas;
    const salsasAdicionalesGratis = Math.max(0, salsasGratisRestantes);
    const salsasAdicionalesCosto = Math.max(0, salsasAdicionales - salsasAdicionalesGratis);
  
    const costoTotal = costoSalsasExtras + salsasAdicionalesCosto * costoSalsasAdicionales;
  
    // Actualizar las salsas correspondientes al producto
    const updatedCartProducts = cartProducts.map((producto) => {
    if (producto.id === productId) { // Solo actualizas el producto seleccionado
      const updatedProduct = {
        ...producto,
        salsas,
        costoSalsas: costoTotal,
      };
      setCartProducts([...cartProducts.filter(p => p.id !== productId), updatedProduct]);
      console.log(updatedProduct)
      console.log("No paso nada")
      addToCart(updatedProduct);
    }

    console.log(countBM)
    console.log(countSweetB)
    console.log(countJason)

    return producto;
  });
    
  setCartProducts(updatedCartProducts);
  onClose();
  onSelectSalsas(salsas);
  onContinue();
  };

  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6 bg-black">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-custom-yellow pb-4">Elige tu salsa</p>
            <div className="modal-close cursor-pointer  pb-4">
              <svg
                onClick={onClose}
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z"></path>
              </svg>
            </div>
          </div>
          <div>
            <div className="flex justify-start items-center mx-3 pb-5">
              <div className="flex justify-between items-center pb-3 mr-6">
                <button
                  onClick={() => decreaseCount(setCountBM, countBM)}
                  className="
                    mr-2 bg-gray-600 
                    hover:bg-gray-700
                    text-white
                    font-bold
                    py-1 px-2
                    rounded
                    focus:outline-none focus:shadow-outline"
                >
                  -
                </button>
                <span className="mr-2">{countBM}</span>
                <button
                  onClick={() => increaseCount(setCountBM, countBM)}
                  className="mr-2 bg-custom-yellow 
                  hover:bg-custom-yellow
                  text-black
                  font-bold
                  py-1 px-2
                  rounded
                  focus:outline-none focus:shadow-outline"
                >
                  +
                </button>
              </div>
              <div>
                <h3 className="text-lg font-bold text-custom-yellow">BM</h3>
                <p className="text-sm text-gray-200">
                  Mayonesa, Mostaza, Ketchup, Pepinillos y Cebolla
                </p>
              </div>
            </div>

            <div className="flex justify-start items-center mx-3 pb-5">
              <div className="flex justify-between items-center pb-3 mr-6">
                <button
                  onClick={() => decreaseCount(setCountSweetB, countSweetB)}
                  className="
                  mr-2 bg-gray-600 
                  hover:bg-gray-700
                  text-white
                  font-bold
                  py-1 
                  px-2
                  rounded
                  focus:outline-none focus:shadow-outline"
                >
                  -
                </button>
                <span className="mr-2">{countSweetB}</span>
                <button
                  onClick={() => increaseCount(setCountSweetB, countSweetB)}
                  className="mr-2 bg-custom-yellow 
                  hover:bg-custom-yellow
                  text-black
                  font-bold
                  py-1 px-2
                  rounded
                  focus:outline-none focus:shadow-outline"
                >
                  +
                </button>
              </div>
              <div>
                <h3 className="text-lg font-bold text-custom-yellow">Sweet B</h3>
                <p className="text-sm text-gray-200">
                  Ketchup, Vinagre y Salsa de Soja. Es Agridulce!!!
                </p>
              </div>
            </div>

            <div className="flex justify-start items-center mx-3 pb-5">
              <div className="flex justify-between items-center pb-3 mr-6">
                <button
                  onClick={() => decreaseCount(setCountJason, countJason)}
                  className="
                  mr-2 bg-gray-600 
                  hover:bg-gray-700
                  text-white
                  font-bold
                  py-1 px-2
                  rounded
                  focus:outline-none focus:shadow-outline"
                >
                  -
                </button>
                <span className="mr-2">{countJason}</span>
                <button
                  onClick={() => increaseCount(setCountJason, countJason)}
                  className="mr-2 bg-custom-yellow 
                                     hover:bg-custom-yellow
                                     text-black
                                     font-bold
                                     py-1 px-2
                                     rounded
                                     focus:outline-none focus:shadow-outline"
                >
                  +
                </button>
              </div>
              <div>
                <h3 className="text-lg font-bold text-custom-yellow">Jason's</h3>
                <p className="text-sm text-gray-200">
                  Mayonesa y Barbacoa. Es un toque picantita!. Guarda!
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center py-2 text-sm font-bold text-gray-400">
              <p>Salsas gratis disponibles: {salsasGratisSeleccionadas}</p>
              <p>Costo salsas adicionales: ${costoSalsasExtras}</p>
            </div>

            <div className="flex justify-center items-center pb-3">
              <button
                className={`
                  ${countBM + countSweetB + countJason > 5 ? 'bg-gray-400' : 'bg-custom-yellow'}
                  hover:${countBM + countSweetB + countJason > 5 ? 'bg-gray-400' : 'bg-custom-yellow'}
                  text-black
                  font-bold
                  py-2 w-full
                  rounded
                  focus:outline-none focus:shadow-outline
                  ${countBM + countSweetB + countJason > 5 ? 'cursor-not-allowed' : 'cursor-pointer'}
                `}
                onClick={handleConfirm}
                disabled={countBM + countSweetB + countJason >= 5 && salsasGratisDisponibles === salsasGratisSeleccionadas}
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProductWithQuantity extends Product {
  quantity: number
}

export default ModalSectionBajon;
