import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import CourcesList from "./components/CourcesList"

const Home = () => {
  return (
    <div className="pt-5">
      <h1 className="text-2xl font-semibold">Start Learning now.</h1>
      <h2>Since</h2>
      <Card>
        <CardHeader>
          <CourcesList />
        </CardHeader>
      </Card>
    </div>
  )
}

export default Home
