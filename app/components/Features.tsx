import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CloudLightning,
  Code,
  Eye,
  FileCode,
  Hammer,
  Library,
  ListMinus,
} from "lucide-react";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      title: "Manage Popups with one Script",
      description:
        "Seamless integration with popular platforms and customizable affiliate portal for brand alignment and leveraging existing infrastructure.",
      icon: <FileCode className="text-brand" size={30} />,
    },
    {
      title: "Access to Template Library",
      description:
        " Explore a wide range of professionally designed popup templates in Popwola's template library. Choose from various styles and themes to find the perfect fit for your website.",
      icon: <Library className="text-brand" size={30} />,
    },
    {
      title: "No-Code Editor",
      description:
        "Say goodbye to coding complexities. Popwola provides a user-friendly, no-code editor that allows you to customize and personalize your popups effortlessly. Create visually stunning designs without writing a single line of code.",
      icon: <Hammer className="text-brand" size={30} />,
    },
    {
      title: "Preview Option before Publishing",
      description:
        "Ensure your popups look perfect before going live. With Popwola's preview option, you can see exactly how your popups will appear on your website, making it easy to fine-tune and optimize them for maximum impact.",
      icon: <Eye className="text-brand" size={30} />,
    },
    {
      title: "Timeline Management",
      description:
        "Popwola allows you to manage the display duration of your popups with ease. With the timeline management feature, you can specify the start date and end date for each popup, controlling when it appears and when it should be hidden.",
      icon: <ListMinus className="text-brand" size={30} />,
    },
    {
      title: "Blazing Fast Performance",
      description:
        "Experience lightning-fast performance with Popwola, the ultimate no-code popup builder. We understand the importance of speed in today's digital landscape, which is why we have optimized Popwola to deliver an exceptional user experience with unparalleled speed.",
      icon: <CloudLightning className="text-brand" size={30} />,
    },
  ];
  return (
    // <div id="features" className="px-[5%] py-20 pt-10 relative">
    //   <h1 className="text-4xl font-semibold text-center">
    //     Features of Popwola
    //   </h1>
    //   <p className="text-base text-center mt-2 text-secondary">
    //     Explore the features of Popwola that make it the ultimate no-code popup
    //     builder
    //   </p>

    //   <div className="flex items-center py-7 pt-6 gap-6 flex-wrap justify-center">
    //     <div className="py-20 flex flex-wrap justify-center items-center w-11/12 gap-14">
    //       {features.map((offering: any) => (
    //         <div
    //           key={offering.id}
    //           className="md:w-[330px] w-full flex flex-col gap-4"
    //         >
    //           {offering.icon}
    //           <h3 className="text-xl font-semibold">{offering.title}</h3>
    //           <p className="text-sm text-secondary/60">
    //             {offering.description}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="pr-20 pl-20 pb-20">
          <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 font-bold leading-tight tracking-tighter text-center">
            A super app with
            <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tighter bg-gradient-to-br from-blue-600 to-cyan-300 bg-clip-text text-transparent">
              {` `}360°{` `}
            </span>
            approach to complete learning
          </div>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-10">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-3xl">
                  <Image
                    src="/icons/learn.svg"
                    alt="Hero"
                    height={50}
                    width={50}
                  />
                  Learn
                </CardTitle>
              </CardHeader>
              <CardContent className="flex">
                <svg
                  height="32"
                  viewBox="0 0 32 32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="m0 0h32v32h-32z" />
                    <path
                      d="m18.0571053 11.5445834 6.001328 9.5021027c.5605767.8875798.2954884 2.0615425-.5920914 2.6221192-.3037804.1918613-.6557183.2936947-1.0150139.2936947h-12.002656c-1.04978289 0-1.90080003-.8510171-1.90080003-1.9008 0-.3592956.10183335-.7112334.29369469-1.0150139l6.00132804-9.5021027c.5605767-.8875797 1.7345394-1.1526681 2.6221192-.5920914.2389221.1508982.4411932.3531693.5920914.5920914z"
                      fillRule="nonzero"
                      stroke="#777"
                      strokeWidth="2.34"
                      transform="matrix(0 1 -1 0 32.93125 .03125)"
                    />
                  </g>
                </svg>
                <div>
                  Video Classes
                  <CardDescription>
                    High-quality learning at your own pace in your own space
                  </CardDescription>
                </div>
              </CardContent>
              <CardContent className="flex">
                <svg
                  height="32"
                  viewBox="0 0 32 32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="m0 0h32v32h-32z" />
                    <g fillRule="nonzero" transform="translate(4 5)">
                      <rect
                        height="22.666667"
                        rx="2.64"
                        stroke="#777"
                        strokeWidth="2.31"
                        width="17.333333"
                      />
                      <path
                        d="m10.1645066 9.6623466 2.4963934 4.9927867c.2295222.4590444.0434577 1.0172378-.4155866 1.24676-.1290356.0645178-.2713205.0981067-.4155867.0981067h-4.99278674c-.51322717 0-.92928-.4160528-.92928-.92928 0-.1442662.03358891-.2865511.0981067-.4155867l2.49639337-4.9927867c.22952217-.45904434.78771562-.64510882 1.24675995-.41558665.17984115.08992057.32566612.23574551.41558662.41558665z"
                        fill="#777"
                        transform="matrix(0 1 -1 0 21.333333 2.666667)"
                      />
                      <path
                        d="m17.3333333 4 3.8614899 1.51311116c1.3575317.53194397 2.0268027 2.0636666 1.4948587 3.42119824-.0423062.10796645-.09168.21302822-.1478005.31450267l-5.2085481 9.41785463"
                        stroke="#777"
                        strokeWidth="2.2"
                      />
                    </g>
                  </g>
                </svg>
                <div>
                  Concepts and Stories
                  <CardDescription>
                    Quick revision with definitions, diagrams, animations, and
                    examples
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-3xl">
                  <Image
                    src="/icons/practice.svg"
                    alt="Hero"
                    height={50}
                    width={50}
                  />
                  Practice
                </CardTitle>
              </CardHeader>
              <CardContent className="flex">
                <svg
                  height="32"
                  viewBox="0 0 32 32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="m0 0h32v32h-32z" />
                    <g
                      stroke="#777"
                      strokeLinecap="round"
                      strokeWidth="2.34"
                      transform="translate(8 6)"
                    >
                      <path
                        d="m.60185759 2.05634675h14.06836051c.3289343 0 .5955883.26665393.5955883.59558823 0 .11223051-.0317103.22217721-.0914768.31717017l-3.2124101 5.10581745 3.2124101 5.1058174c.1751683.2784132.0914718.6461135-.1869413.8212817-.094993.0597664-.2049397.0914768-.3171702.0914768h-14.06836051"
                        strokeLinejoin="round"
                      />
                      <path d="m.601858 0v19.8613" />
                    </g>
                  </g>
                </svg>
                <div>
                  Adaptive Practice
                  <CardDescription>
                    Master your concepts with questions that adapt to your
                    learning speed
                  </CardDescription>
                </div>
              </CardContent>
              <CardContent className="flex">
                <svg
                  height="32"
                  viewBox="0 0 32 32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="m0 0h32v32h-32z" />
                    <g
                      stroke="#777"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.34"
                      transform="translate(7 5)"
                    >
                      <rect height="21.6" rx="3.6" width="18" />
                      <path d="m6.10989613 10.6485128 2.06096617 2.3274029 3.3521239-3.86840267" />
                    </g>
                  </g>
                </svg>
                <div>
                  Exam Prep
                  <CardDescription>
                    Prepare comprehensively for entrance tests and competitive
                    exams
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-3xl">
                  <Image
                    src="/icons/ask.svg"
                    alt="Hero"
                    height={50}
                    width={50}
                  />
                  Ask
                </CardTitle>
              </CardHeader>
              <CardContent className="flex">
                <svg
                  height="32"
                  viewBox="0 0 32 32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="m0 0h32v32h-32z" />
                    <path
                      d="m18.2 21.5137446-3.3400022 2.9695085c-.1712747.1522759-.3894157.2359777-.6149978.2359777-.5219091 0-.945-.4388523-.945-.9802039v-2.2252823h-4.41c-1.04381818 0-1.89-.8777045-1.89-1.9604078v-9.59292898c0-1.08270334.84618182-1.96040782 1.89-1.96040782h15.12c1.0438182 0 1.89.87770448 1.89 1.96040782v9.59292898c0 1.0827033-.8461818 1.9604078-1.89 1.9604078z"
                      fillRule="nonzero"
                      stroke="#777"
                      strokeWidth="2.34"
                    />
                  </g>
                </svg>
                <div>
                  Ask with Chats
                  <CardDescription>
                    Type any question in chat and get stepwise solutions
                  </CardDescription>
                </div>
              </CardContent>
              <CardContent className="flex">
                <svg
                  height="32"
                  viewBox="0 0 32 32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="m0 0h32v32h-32z" />
                    <g
                      fillRule="nonzero"
                      stroke="#777"
                      strokeWidth="2.34"
                      transform="translate(5 8)"
                    >
                      <path d="m1.8 6.3h4.5v9.9h-4.5c-.99411255 0-1.8-.8058875-1.8-1.8v-6.3c0-.99411255.80588745-1.8 1.8-1.8z" />
                      <path
                        d="m17.1 6.3h4.5v9.9h-4.5c-.9941125 0-1.8-.8058875-1.8-1.8v-6.3c0-.99411255.8058875-1.8 1.8-1.8z"
                        transform="matrix(-1 0 0 1 36.9 0)"
                      />
                      <path d="m4.5 5.4c0-2.98233765 2.05134987-5.4 4.58181818-5.4h3.43636362c2.5304683 0 4.5818182 2.41766235 4.5818182 5.4" />
                    </g>
                  </g>
                </svg>
                <div>
                  Ask a Tutor
                  <CardDescription>
                    Seek guidance to solve questions from a live tutor available
                    24x7.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
  );
};

export default Features;
