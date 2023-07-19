export interface Salsas {
    bm: number;
    sweetB: number;
    jasons: number;
  }
  
 export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    quantity: number;
    salsas?: Salsas; // Esta propiedad puede ser opcional si no todos los productos tienen salsas
    costoSalsas?: number; // Esta propiedad puede ser opcional si no todos los productos tienen costoSalsas
  }
  
// Usar la interfaz en tu componente CardProduct
export interface CardProductProps {
    product: Product;
    onAddToCart: (event: React.MouseEvent) => void;
}
