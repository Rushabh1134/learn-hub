"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { getAllCourcesList } from "@/lib/services/library.service"
import { CourceInterface } from "@/app/interface/cource.interface"

import CampaignCardSkeleton from "../../components/CardSkeleton"

const LibraryList = () => {
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
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
        </>
      )}
      {library.map((lib: any, i: number) => (
        <div key={i} className="w-[350px] bg-muted p-3 pb-2 rounded-lg">
          <p>{lib.name}</p>
          <div className="mt-2"></div>
        </div>
      ))}
    </div>
  )
}

export default LibraryList
