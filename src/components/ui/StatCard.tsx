type Props = {
    title: string
    value: string
}

export default function StatCard({ title, value }: Props) {

    return (

        <div className="bg-white rounded-2xl p-6 shadow-sm">

            <h3 className="text-gray-500 text-lg">
                {title}
            </h3>

            <p className="text-3xl font-bold mt-2">
                {value}
            </p>

        </div>

    )
}