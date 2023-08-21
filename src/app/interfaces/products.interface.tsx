export interface Salsas {
    bm: number;
    sweetB: number;
    jasons: number;
  }
  
 export interface Product {
    id: number;
    carritoId: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imageUrl: string;
    cantidad: number;
    salsas: Salsas;
    costoSalsas: number;
  }
  
// Usar la interfaz en tu componente CardProduct
export interface CardProductProps {
    product: Product;
    onAddToCart: (event: React.MouseEvent) => void;
}
