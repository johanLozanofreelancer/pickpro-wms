import Sidebar from '../Sidebar.tsx'
import Navbar from './Navbar.tsx'
import { Outlet } from 'react-router-dom'


export default function DashboardLayout() {
    return (
        <div className="flex min-h-screen">
            <Sidebar/>
            <main className="flex-1 text-3xl bg-gray-200 p-10">
                <div className='mb-5'>
                    <Navbar />
                </div>
                <Outlet/>
            </main>
        </div>
    )
}