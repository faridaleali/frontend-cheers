import { useCart } from '@/app/helpers/CartProvider';
import { Salsas, Product } from '@/app/interfaces/products.interface';

export const SalsasSeleccion = () => {
  const { cart, updateProductInCart } = useCart();

  const handleIncrement = (productoId: number, Salsa: string) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productoId) {
        const updatedProduct = { 
          ...product
        };

        const totalSalsas = (updatedProduct.salsas.bm + updatedProduct.salsas.sweetB + updatedProduct.salsas.jasons)

        if(totalSalsas < 2 * updatedProduct.cantidad) {
          if (Salsa === "BM") {
            updatedProduct.salsas.bm += 1;
          } else if (Salsa === "SW") {
            updatedProduct.salsas.sweetB += 1;
          } else if (Salsa === "JS") {
            updatedProduct.salsas.jasons += 1;
          }
        } 
        /*else if (totalSalsas >= 2 && totalSalsas < 5) {
          if (Salsa === "BM") {
            updatedProduct.salsas.bm += 1;
            updatedProduct.costoSalsas += 100
          } else if (Salsa === "SW") {
            updatedProduct.salsas.sweetB += 1;
            updatedProduct.costoSalsas += 100
          } else if (Salsa === "JS") {
            updatedProduct.salsas.jasons += 1;
            updatedProduct.costoSalsas += 100
          }
        }

        console.log(updatedProduct.costoSalsas)*/

        updateProductInCart(productoId, updatedProduct);

        return updatedProduct;
      }
      return product;
    });

  };

  const handleDecrement = (productId: number, Salsa: string) => {

    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        const updatedProduct = { ...product };

        /*const totalSalsas = (updatedProduct.salsas.bm + updatedProduct.salsas.sweetB + updatedProduct.salsas.jasons)

        if(totalSalsas <= 5 && totalSalsas > 2 ) {
          updatedProduct.costoSalsas -= 100
        }*/
        
        if (Salsa === "BM" && updatedProduct.salsas.bm > 0) {
          updatedProduct.salsas.bm -= 1;
        } else if (Salsa === "SW" && updatedProduct.salsas.sweetB > 0) {
          updatedProduct.salsas.sweetB -= 1;
        } else if (Salsa === "JS" && updatedProduct.salsas.jasons > 0) {
          updatedProduct.salsas.jasons -= 1;
        }

        // console.log(updatedProduct.costoSalsas)

        updateProductInCart(productId, updatedProduct);

        return updatedProduct;
      }
      return product;
    });
  };

  return (
    <div className="flex flex-col bg-black p-4 mt-4 rounded-lg shadow-lg font-semibold text-amber-400">
      <h2 className="flex flex-row justify-center text-xl font-semibold mb-4 text-gray-200 text-2xl">Selecciona tus salsas</h2>
      <div className='flex flex-col text-center m-auto text-gray-200'>
        <h3 className='text-gray-200 mb-4 text-xl'>Tipos de salsas</h3>
        <hr></hr>
        <div className='flex flex-col justify-center align-center mt-5 mb-5 text-gray-200'>
          <h5 className='text-xl text-amber-400'>BM</h5>
          <p className='italic underline underline-offset-4 text-gray-400'>Mayonesa, Mostaza, Ketchup, Pepinillos y Cebolla</p>
        </div>
        <div className='text-gray-200 mb-4'>
          <h5 className='text-xl text-amber-400 '>Sweet B</h5>
          <p className='italic underline underline-offset-4 text-gray-400'>Ketchup, Vinagre y Salsa de Soja. Es Agridulce!!!</p>
        </div>
        <div className='text-gray-200 mb-7'>
          <h5 className='text-xl text-amber-400'>Jasons</h5>
          <p className='italic underline underline-offset-4 text-gray-400'>Mayonesa y Barbacoa. Es un toque picantita!. Guarda!</p>
        </div>
        <hr></hr>
      </div>
      <div className='flex flex-col justify-center m-auto text-center mt-5'>
        <p className='font-bold text-lg bg-amber-400 text-black w-70 px-5 py-3'>Solo es posible 2 tipos de salsas gratis por unidad</p>
        <hr className='mt-5'></hr>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 pb-4">
        {cart.map((product) => (
          <div key={product.id} className="flex flex-col justify-center bg-stone-800 brightness-90 items-center font-semibold rounded-lg p-2 shadow-outline">
            <h2 className="mb-3 mt-0 text-center">{product.nombre}</h2>
            <div>
              <img 
              src={product.imageUrl}
              alt={product.descripcion} 
              className='w-8/12 rounded-full m-auto'
              />
              <p className='flex flex-row justify-center mt-2'>Cantidad: {product.cantidad}</p>
              <div className='flex flex-row mt-4 justify-center justify-center'>
                <div className='flex flex-col text-amber-500'>
                  <div className='flex flex-row justify-center'>
                    <h3 className="text-lg font-bold ">BM</h3>
                  </div>
                  <div className='flex flex-row mr-2'>
                  <button
                    onClick={() => handleDecrement(product.id, "BM")}
                    className="
                      bg-gray-600 
                      hover:bg-gray-700
                      text-white
                      font-bold
                      py-1 px-2
                      rounded
                      focus:outline-none focus:shadow-outline"
                    >
                    -
                    </button>
                    <span className="mx-2">{product.salsas.bm}</span>
                    <button
                      onClick={() => handleIncrement(product.id, "BM")}
                      className="bg-custom-yellow 
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
                </div>
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-center'>
                    <h3 className="text-lg font-bold">Sweet B</h3>
                  </div>
                  <div className='flex flex-row'>
                    <button
                      onClick={() => handleDecrement(product.id, "SW")}
                      className="
                        bg-gray-600 
                        hover:bg-gray-700
                        text-white
                        font-bold
                        py-1 px-2
                        rounded
                        focus:outline-none focus:shadow-outline"
                    >
                    -
                    </button>
                    <span className="mx-2">{product.salsas.sweetB}</span>
                    <button
                      onClick={() => handleIncrement(product.id, "SW")}
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
                </div>
                  <div className='flex flex-col'>
                  <h3 className="text-lg font-bold">Jason B</h3>
                  <div className='flex flex-row'>
                  <button
                    onClick={() => handleDecrement(product.id, "JS")}
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
                  <span className="mr-2">{product.salsas.jasons}</span>
                  <button
                    onClick={() => handleIncrement(product.id, "JS")}
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface SalsasSeleccionProps {
  onSalsaSelection: (salsas: Salsas) => void;
  productId: string | null;
}