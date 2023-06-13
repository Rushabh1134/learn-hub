"use client"

import React, { useEffect, useState } from "react"
import { Loader } from "lucide-react"

import {
  getUserDocument,
  updateUserDocument,
} from "@/lib/services/user.service"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

import { UserInterface } from "../../../interface/user.interface"
import ProfileSkeleton from "./components/ProfileSkeleton"

const Profile = () => {
  const [profileData, setProfileData] = useState<UserInterface>({
    $id: "",
    userName: "",
    email: "",
  })
  const [loading, setLoading] = useState<boolean>(true)
  const [updating, setUpdating] = useState<boolean>(false)

  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUpdating(true)
    try {
      // const updatedProfile = await updateUserDocument(profileData.$id, {
      //   ...profileData,
      // })
      setUpdating(false)
      toast({
        title: "Profile updated",
      })
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Cannot update profile",
      })
      setUpdating(false)
    }
  }

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getUserDocument()
        const doc = profile.documents[0]
        setProfileData({
          $id: doc.$id,
          userName: doc.userName,
          email: doc.email
        })
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  return (
    <div className="flex items-center w-full justify-center py-20 flex-col">
      {loading ? (
        <ProfileSkeleton />
      ) : (
        <>
          <div className="w-[100px] h-[100px] rounded-full bg-primary/10 text-xl flex items-center justify-center">
            {profileData?.userName[0]}
          </div>
          <form
            onSubmit={handleSubmit}
            className="py-16 w-[500px] flex flex-col gap-7 items-center"
          >
            <div className="mb-4 w-full">
              <label className="block mb-2 text-xs text-secondary font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                required
                name="fullName"
                value={profileData?.userName}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
              />
            </div>

            <div className="mb-4 w-full">
              <label className="block mb-2 text-xs text-secondary font-medium">
                Website Url <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="mb-4 w-full">
              <label className="block mb-2 text-xs text-secondary font-medium">
                Address
              </label>
            </div>

            <Button
              disabled={updating}
              className="text-sm p-3 rounded-xl px-10"
            >
              {updating && <Loader size={14} className="animate-spin mr-3" />}
              Update
            </Button>
          </form>
        </>
      )}
    </div>
  )
}

export default Profile
