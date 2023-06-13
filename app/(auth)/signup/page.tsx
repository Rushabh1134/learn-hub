import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

import RegisterForm from "./components/RegisterForm"

const Signup = () => {
  return (
    <ScrollArea className="h-screen w-full  ">
      
      <div className="h-full p-6 flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-center lg:text-5xl">Create your LearnHub account!</CardTitle>
            <CardDescription>
            Unlock Your Potential, Anytime, Anywhere!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm />
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  )
}

export default Signup
