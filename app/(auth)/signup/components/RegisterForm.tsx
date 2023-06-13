"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { RegisterInterface } from "@/app/interface/auth.interface"
import { FileWarning, LoaderIcon } from "lucide-react"

import { register } from "@/lib/services/auth.service"
import { createUserDocument } from "@/lib/services/user.service"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

const RegisterForm = () => {
  const [data, setData] = useState<RegisterInterface>({
    userName: "",
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [confirmedPassword, setConfirmedPassword] = useState<string>("")
  const router = useRouter()

  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (data.password !== confirmedPassword)
      return toast({
        variant: "destructive",
        title: "Passwords do not match!",
      })

    try {
      setLoading(true)
      const user = await register(data)
      localStorage.setItem("user", JSON.stringify(user))
      toast({
        title: "Registration Successful!",
      })
      setConfirmedPassword("")
      setData({
        userName: "",
        email: "",
        password: "",
      })
      if (user) {
        const { password, ...rest } = data
        router.push("/space")
        await createUserDocument(rest, user.$id)
        setLoading(false)
      }
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Can't Register :(",
        description: err.message,
      })
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col gap-3 items-center justify-center"
    >
      <div className="flex items-center gap-4 w-full">
        <div className="mb-4 w-1/2">
          <label className="block mb-2 text-xs  font-medium">
             UserName <span className="text-red-500">*</span>
          </label>
          <Input
            required
            name="userName"
            value={data.userName}
            onChange={handleInputChange}
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4 w-1/2">
          <label className="block mb-2 text-xs  font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            required
            name="email"
            value={data.email}
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="w-full flex items-center gap-4 ">
        <div className="mb-4 w-1/2">
          <label className="block mb-2 text-xs  font-medium">
            Password <span className="text-red-500">*</span>
          </label>
          <Input
            name="password"
            value={data.password}
            onChange={handleInputChange}
            required
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="mb-4 w-1/2">
          <label className="block mb-2 text-xs  font-medium">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <Input
            name="confirmedPassword"
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            required
            type="password"
            placeholder="Re-type password"
          />
        </div>
      </div>
      <Button disabled={loading} className="w-full text-sm">
        {loading && <LoaderIcon className="animate-spin mr-3" size={20} />}{" "}
        SignUp
      </Button>
      <p className="text-sm mt-3">
        Alread have an account?{" "}
        <Link className="text-brand" href={"/login"}>
          Login
        </Link>
      </p>
    </form>
  )
}

export default RegisterForm
