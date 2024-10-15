import SignIn from "@/components/sign-in";
import EmailWaitlist from "@/components/email-waitlist";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Particles from "@/components/ui/particles";
import { Navbar } from "@/components/navbar";
import Safari from "@/components/ui/safari";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      <Navbar />
      <Particles
        className="absolute inset-0 w-full h-full -z-10"
        quantity={200}
      />
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 relative z-10 mt-16 space-y-8">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
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
            Designed to help you launch your next project faster by{" "}
            <a
              href="https://x.com/amritwt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300 transition-colors"
            >
              @amritwt
            </a>{" "}
            ❤️
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 mb-8 w-full">
          <EmailWaitlist />
          <div className="flex flex-col justify-center">
            <SignIn />
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 blur-xl"></div>
            <div className="bg-gray-900 rounded-lg overflow-hidden relative z-10">
              <div className="relative">
                <BorderBeam
                  className="rounded-xl absolute inset-0"
                  size={200}
                />
                <Safari url="starter.com" className="w-full h-full" />
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    </div>
  );
}
