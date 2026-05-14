import type { Movement } from "../types"

export const movements: Movement[] = [
    {
        id: 1,
        productId: 1,
        type: "entry",
        quantity: 50,
        toLocation: "A-01-01",
        workerId: 1,
        date: "2024-05-14",
        notes: "Entrada inicial de stock"
    },
    {
        id: 2,
        productId: 2,
        type: "entry",
        quantity: 100,
        toLocation: "A-01-02",
        workerId: 1,
        date: "2024-05-14",
        notes: "Reposición de stock"
    },
    {
        id: 3,
        productId: 1,
        type: "exit",
        quantity: 5,
        fromLocation: "A-01-01",
        workerId: 2,
        date: "2024-05-14",
        notes: "Venta al cliente #1234"
    },
    {
        id: 4,
        productId: 3,
        type: "entry",
        quantity: 150,
        toLocation: "B-02-01",
        workerId: 1,
        date: "2024-05-13",
        notes: "Nuevo lote de proveedor"
    },
    {
        id: 5,
        productId: 4,
        type: "exit",
        quantity: 20,
        fromLocation: "B-02-02",
        workerId: 3,
        date: "2024-05-13",
        notes: "Venta mayorista"
    },
    {
        id: 6,
        productId: 5,
        type: "transfer",
        quantity: 10,
        fromLocation: "C-03-01",
        toLocation: "C-03-02",
        workerId: 2,
        date: "2024-05-12",
        notes: "Reorganización de almacén"
    }
]
