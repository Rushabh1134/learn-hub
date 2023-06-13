import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import ChaptersList from "./components/ChaptersList"


const Home = () => {
  return (
    <div className="pt-5">
      <Card className="grid grid-cols-1">
        
          <ChaptersList />
      </Card>
    </div>
  )
}

export default Home
