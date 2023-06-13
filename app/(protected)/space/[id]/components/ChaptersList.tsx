"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { getAllChaptersList } from "@/lib/services/library.service"
import { ChapterInterface } from "@/app/interface/chapter.interface"

import Link from "next/link"
import ChaptersSkeleton from "../../components/ChaptersSkeleton"

const ChaptersList = () => {
  const [library, setLibrary] = useState<ChapterInterface[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchLibraries = async () => {
      setLoading(true)
      const libraries = await getAllChaptersList()
      setLibrary(libraries.documents)
      setLoading(false)
    }
    fetchLibraries()
  }, [])
  return (
    <div className="py-8  items-center justify-start gap-3">
      {loading && (
        <>
          <ChaptersSkeleton />
          <ChaptersSkeleton />
          <ChaptersSkeleton />
          <ChaptersSkeleton />
          <ChaptersSkeleton />
          <ChaptersSkeleton />
          <ChaptersSkeleton />
         
        </>
      )}
      {library.map((lib: any, i: number) => (
        <Link href={`${lib.link}`}>
          <div key={i} className=" bg-muted p-3 pb-2  m-2 rounded-lg gap-4">
            <div>{lib.title}</div>
            <div>{lib.description}</div>
            <div className="mt-2"></div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ChaptersList
