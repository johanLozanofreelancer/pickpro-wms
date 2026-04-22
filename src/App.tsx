import LoginForm from "./components/LoginForm";
import LogoSection from "./components/LogoSection";


export default function App() {
  return (
    <>
      
      <div className="min-h-screen bg-grey-950 grid grid-cols-1 lg:grid-cols-2 items-center">
        <LogoSection/>
        <LoginForm
        />
      </div>

    </>
  )
}
