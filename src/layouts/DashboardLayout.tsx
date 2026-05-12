import type { ReactNode } from 'react'
import Sidebar from '../components/Sidebar.tsx'

export type DashboardLayoutProps = {
    children: ReactNode
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
    return (
        <div className="flex min-h-screen">
            <Sidebar/>

            <main className="flex-1 text-3xl bg-gray-200 p-10">
                {children}
            </main>
        </div>
    )
}