
import { LoginForm } from "@/components/login-form"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"

export default function Login() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="z-10 flex h-screen w-full items-center justify-center px-4">
      <LoginForm />
    </div>
    </BackgroundBeamsWithCollision>
    
  )
}
