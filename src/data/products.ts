import type { Product } from "../types"

export const products: Product[] = [
    {
        id: 1,
        name: "Laptop Dell Inspiron",
        sku: "LAP-001",
        category: "Electrónicos",
        price: 899.99,
        description: "Laptop de 15.6 pulgadas, 8GB RAM, 256GB SSD",
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 2,
        name: "Monitor Samsung 24\"",
        sku: "MON-001",
        category: "Electrónicos",
        price: 199.99,
        description: "Monitor LED 24 pulgadas Full HD",
        createdAt: "2024-01-16",
        updatedAt: "2024-01-16"
    },
    {
        id: 3,
        name: "Teclado Mecánico RGB",
        sku: "TEC-001",
        category: "Accesorios",
        price: 79.99,
        description: "Teclado mecánico con iluminación RGB",
        createdAt: "2024-01-17",
        updatedAt: "2024-01-17"
    },
    {
        id: 4,
        name: "Mouse Inalámbrico Logitech",
        sku: "MOU-001",
        category: "Accesorios",
        price: 29.99,
        description: "Mouse inalámbrico ergonómico",
        createdAt: "2024-01-18",
        updatedAt: "2024-01-18"
    },
    {
        id: 5,
        name: "Auriculares Bluetooth Sony",
        sku: "AUR-001",
        category: "Audio",
        price: 149.99,
        description: "Auriculares con cancelación de ruido",
        createdAt: "2024-01-19",
        updatedAt: "2024-01-19"
    }
]
