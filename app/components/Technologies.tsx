import { siteConfig } from "@/config/site";
import Link from "next/link";

const Technologies = () => {
  return (
    <div className="px-[5%] pb-20 flex flex-col items-center">
      <h1 className="text-4xl font-semibold text-center">
      🔥 Ignited by cutting-edge technologies
      </h1>
      <div className="py-16 flex items-center gap-16 justify-center flex-wrap">
        <Link href={siteConfig.links.nextjs} target="_blank">
          <img
            src="/next.png"
            className="rounded-full bg-white w-[70px] h-[70px]"
            alt="next"
          />
        </Link>
        <Link href={siteConfig.links.appwrite} target="_blank">
          <img src="/appwrite.png" className="w-[200px]" alt="" />
        </Link>
        <Link
          href={siteConfig.links.snadcn}
          className="flex items-center gap-3"
          target="_blank"
        >
          <img
            src="/shadcn.jpg"
            className="w-[70px] h-[70px] rounded-full"
            alt=""
          />
          <p className="text-xl font-semibold">shadcn/ui</p>
        </Link>
        <Link href={siteConfig.links.typescript}>
        <img src="/t.png" className="w-[200px] rounded-full" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Technologies;
