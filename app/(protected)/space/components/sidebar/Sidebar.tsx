import Link from "next/link"
import { Github, Twitter } from "lucide-react"

import Logo from "@/components/Logo"

import SidebarNavs from "./SidebarNavs"

const Sidebar = () => {
  const preFilledText =
    "Check out Popwola, an awesome project for building and managing popups with no-code editor. Project is created by @niazmorshed_ for @appwrite x @hashnode Hackathon."

  return (
    <aside className="h-full w-[240px] flex flex-col justify-between">
      <div className="top">
        <Logo className="w-[40px] mb-8 h-[40px]" />
        <SidebarNavs />
      </div>
      <div className="bottom p-4 bg-muted rounded-xl">
        <p className="text-sm text-center text-primary">Love the project? 💖</p>
        <p className="text-center text-xs text-secondary-foreground bg-se">
          Leave a star / tweet on social
        </p>
        <div className="mt-6 flex justify-center items-center gap-7">
          <Link
            href="https://github.com/NiazMorshed2007/popwola"
            target="_blank"
          >
            <Github
              size={20}
              className=" hover:text-secondary/70 transition-all"
            />
          </Link>
          <Link
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              preFilledText
            )}`}
            target="_blank"
          >
            <Twitter
              size={20}
              className="hover:text-secondary/70 transition-all"
            />
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
