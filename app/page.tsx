import SignIn from "@/components/sign-in";
import EmailWaitlist from "@/components/email-waitlist";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Particles from "@/components/ui/particles";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Navbar/>
      <Particles className="absolute inset-0 w-full h-full -z-10" quantity={200} />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-0.5 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Join our waitlist</span>
            <ArrowRightIcon className="ml-1 size-2.5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight">
          <span className="block">Accelerate your</span>
          <span className="block">Indie Hacking Journey, By Amrit.</span>
        </div>
        <EmailWaitlist />
        <SignIn />
      </div>
    </div>
  );
}
