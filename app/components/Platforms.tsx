import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import Link from "next/link"
import React from "react"
import Image from "next/image"

const Platforms = () => {
  return (
    <div className="pl-20 pr-20 pb-20`">
      <div className="grid xl:grid-cols-2 ">
        <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-16 font-bold leading-tight tracking-tighter">
          LearnHub app is available on
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tighter bg-gradient-to-br from-blue-600 to-cyan-300 bg-clip-text text-transparent">
            all platforms
          </span>
        </div>
        <div className="grid gap-4 grid-row grid-cols-3 justify-center items-center mt-10 md:mt-10 lg:mt-16">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/platforms/Laptop@2x.png"
              alt="Laptop"
              height={93}
              width={121.5}
            />
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold leading-tight tracking-tighter m-2">
              Desktops
            </h3>
            <p className="text-muted-foreground text-center m-2 text-xs lg:text-base">
              All major browsers supported
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/platforms/mobile-g@2xl.png"
              alt="Laptop"
              height={93}
              width={49.5}
            />
            <h3 className="text-lg md:text-xl lg:text-2xl m-2 xl:text-3xl font-extrabold leading-tight tracking-tighter">
              Mobiles
            </h3>
            <p className="text-muted-foreground text-center m-2 text-xs lg:text-base">
              (Android and iOS coming soon)
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/platforms/tablet@2x.png"
              alt="Laptop"
              height={93}
              width={121.5}
            />
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold leading-tight tracking-tighter m-2">
              Tablets
            </h3>
            <p className="text-muted-foreground text-center m-2 text-xs lg:text-base">
              (Android and iPad coming soon)
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Link
          href="/signup"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Get Started
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </div>
  )
}

export default Platforms
