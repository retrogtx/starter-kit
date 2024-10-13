import SignIn from "@/components/sign-in";
import EmailWaitlist from "@/components/email-waitlist";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Particles from "@/components/ui/particles";
import { Navbar } from "@/components/navbar";
import Safari from "@/components/ui/safari";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      <Navbar />
      <Particles className="absolute inset-0 w-full h-full -z-10" quantity={200} />
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 relative z-10 mt-16 space-y-8">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-0.5 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing Starter</span>
            <ArrowRightIcon className="ml-1 size-2.5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
        <div className="text-center max-w-4xl mx-auto z-10">

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Accelerate your Indie Journey with this Starter.
          </h1>

          <p className="text-xl mb-8 text-gray-200">
            Designed to help you launch your next project faster by <a href="https://x.com/amritwt" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300 transition-colors">@amritwt</a> ❤️
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <EmailWaitlist />
          <div className="flex flex-col items-center justify-center space-y-4">
            <SignIn />
          </div>
        </div>
        <div className="w-full h-screen"> {/* Parent container with full viewport size */}
          <div className="relative w-full h-full"> {/* Explicit size */}
            <Safari url="starter.com" className="w-full h-full" />
          </div>
        </div>
      </main>
    </div>
  );
}
