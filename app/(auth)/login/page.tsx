import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SiteHeader } from "@/app/components/SiteHeader"

import LoginForm from "./components/LoginForm"

const Login = () => {
  return (
    <ScrollArea className="h-screen w-full  ">
      <div className="h-full p-6 flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-center lg:text-5xl">
              Welcome Back!
            </CardTitle>
            <CardDescription>
              Login to your account to continue learning!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  )
}

export default Login
