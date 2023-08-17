export interface Salsas {
    bm: number;
    sweetB: number;
    jasons: number;
  }
  
 export interface Product {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    imageUrl: string;
    quantity: number;
    salsas: Salsas;
    costoSalsas: number;
    carritoId: number;
  }
  
// Usar la interfaz en tu componente CardProduct
export interface CardProductProps {
    product: Product;
    onAddToCart: (event: React.MouseEvent) => void;
}
