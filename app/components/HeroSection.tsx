import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div
      id="product"
      className="banner overflow-hidden px-[5%] relative pt-20 max-md:pt-40 pb-20 p-container w-screen md:min-h-screen flex flex-col items-center justify-center"
    >
      {/* <div className="shape1 -z-10"></div>
      <div className="shape2 -z-10"></div> */}
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
        <div className="left w-full md:w-1/2">
          <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tighter">
              Ignite Your Learning Journey with LearnHub.
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tighter bg-gradient-to-br from-blue-600 to-cyan-300 bg-clip-text text-transparent xl:mt-10">
              Discover. Learn. Grow.
            </h1>
          </div>
          <p className="relative md:text-lg text-muted-foreground mt-4 mb-4">
          LearnHub: Ignite Your Learning Journey! 🚀📚 Unleash Your Potential with our innovative e-learning platform. Join us to explore a diverse range of courses, interactive content, and expert instructors. Embark on an educational adventure that shapes your future! ✨🎓🌍
          </p>
          <div className="button flex items-center gap-6">
            <Link href="/login">
              <Button className="text-sm p-3 px-6 rounded-full">
                Get Started!
              </Button>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/NiazMorshed2007/popwola"
            >
              <Button variant={"outline"} className="flex items-center gap-2 rounded-full p-3 px-8">
                <Github size={20} /> Star on Github
              </Button>
            </Link>
          </div>
        </div>
        <div className="right w-full md:w-1/2 h-full flex items-center mt-7 md:mt-0 justify-center md:justify-end">
        <Image
              src="/students.svg"
              alt="Hero"
              height={631}
              width={540}
            />
        </div>
      </div>

      <img
        className="border mt-28 shadow-brand/10 border-secondary/10 shadow-2xl relative rounded-xl border-dark w-full md:w-10/12"
        src="/product-preview.svg"
        alt=""
      />
    </div>
  );
};

export default HeroSection;
