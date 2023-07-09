// Definir la interfaz del producto
export interface Product {
    id: string;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
}

// Usar la interfaz en tu componente CardProduct
export interface CardProductProps {
    product: Product;
}
