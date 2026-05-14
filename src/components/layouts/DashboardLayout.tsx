import type { ReactNode } from 'react'
import Sidebar from '../Sidebar.tsx'
import Navbar from './Navbar.tsx'


export type DashboardLayoutProps = {
    children: ReactNode
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
    return (
        <div className="flex min-h-screen">
            <Sidebar/>

            <main className="flex-1 text-3xl bg-gray-200 p-10">
                <Navbar />
                <div className='mt-10'>
                    {children}
                </div>
            </main>
        </div>
    )
}