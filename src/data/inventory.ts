import type { InventoryItem } from "../types"

export const inventory: InventoryItem[] = [
    {
        id: 1,
        productId: 1,
        quantity: 45,
        location: "A-01-01",
        minStock: 10,
        maxStock: 100,
        lastUpdated: "2024-05-14"
    },
    {
        id: 2,
        productId: 2,
        quantity: 78,
        location: "A-01-02",
        minStock: 20,
        maxStock: 150,
        lastUpdated: "2024-05-14"
    },
    {
        id: 3,
        productId: 3,
        quantity: 120,
        location: "B-02-01",
        minStock: 30,
        maxStock: 200,
        lastUpdated: "2024-05-14"
    },
    {
        id: 4,
        productId: 4,
        quantity: 200,
        location: "B-02-02",
        minStock: 50,
        maxStock: 300,
        lastUpdated: "2024-05-14"
    },
    {
        id: 5,
        productId: 5,
        quantity: 35,
        location: "C-03-01",
        minStock: 15,
        maxStock: 80,
        lastUpdated: "2024-05-14"
    }
]
