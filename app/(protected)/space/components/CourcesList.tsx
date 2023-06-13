"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { getAllCourcesList } from "@/lib/services/library.service"
import { CourceInterface } from "@/app/interface/cource.interface"

import CardSkeleton from "./CardSkeleton"
import Link from "next/link"

const CourcesList = () => {
  const [library, setLibrary] = useState<CourceInterface[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchLibraries = async () => {
      setLoading(true)
      const libraries = await getAllCourcesList()
      setLibrary(libraries.documents)
      setLoading(false)
    }
    fetchLibraries()
  }, [])
  return (
    <div className="campaigns-list flex-wrap py-8 flex items-center justify-start gap-3">
      {loading && (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      )}
      {library.map((lib: any, i: number) => (
        <Link href={`/space/${lib.name}`}>
          <div key={i} className="w-[350px] bg-muted p-3 pb-2 rounded-lg">
            <Image
              src="https://img.youtube.com/vi/rZ41y93P2Qo/maxresdefault.jpg"
              alt="Cover photo"
              width={700 / 2}
              height={500 / 2}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA..."
              placeholder="blur"
            />
            <p>{lib.name}</p>
            <div className="mt-2"></div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CourcesList
