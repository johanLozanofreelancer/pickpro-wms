import StatCard from "../components/ui/StatCard"

export default function DashboardPage() {
    return (
        <>  
            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
                <StatCard
                    title="Total Productos"
                    value="1240"
                />

                <StatCard
                    title="Stock Total"
                    value="18,450"
                />

                <StatCard
                    title="Entradas Hoy"
                    value="145"
                />

                <StatCard
                    title="Pedidos Pendientes"
                    value="23"
                />

            </div>
        </>
    )
}
