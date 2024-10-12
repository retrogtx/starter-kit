import SignIn from "@/components/sign-in";
import EmailWaitlist from "@/components/email-waitlist";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center">Welcome to Our App</h1>
      <EmailWaitlist />
      <SignIn />
    </div>
  );
}
