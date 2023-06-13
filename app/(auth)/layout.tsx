"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { getSession } from "@/lib/services/auth.service"
import { Toaster } from "@/components/ui/toaster"
import Logo from "@/components/Logo"

import { SiteHeader } from "../components/SiteHeader"

interface Props {
  children: React.ReactNode
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const [auth, setAuth] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await getSession()
        if (session) {
          setAuth(true)
          router.replace("/space")
          setLoading(false)
        }
      } catch (error) {
        setAuth(false)
        setLoading(false)
      }
    }
    checkSession()
  }, [])

  return (
    <>
      {loading ? (
        <main className="w-screen h-screen fixed flex items-center justify-center">
          <Logo className="animate-pulse" />
        </main>
      ) : (
        <>
          {!auth && (
            <>
              <SiteHeader />
              <main className="w-screen h-screen flex items-center relative">
                {children}
                <Toaster />
              </main>
            </>
          )}
        </>
      )}
    </>
  )
}

export default AuthLayout
