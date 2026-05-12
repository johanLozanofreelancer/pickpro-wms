import LogoSection from "../components/LogoSection"
import LoginForm from "../components/LoginForm"

export default function LoginPage() {
    return (
        <div className="bg-linear-to-r from-slate-950 via-amber-950 to-slate-950">
            <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center">
                <LogoSection/>
                <LoginForm
            />
            </div>
        </div>
    )
}
