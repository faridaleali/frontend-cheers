// Definir la interfaz del producto
export interface Product {
    quantity: number;
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}

// Usar la interfaz en tu componente CardProduct
export interface CardProductProps {
    product: Product;
}
