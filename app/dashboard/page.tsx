"use client";

import { signOut, useSession } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

function SignOutButton() {
  const router = useRouter()
  
  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/")
        }
      }
    })
  }
  
  return (
    <button 
      onClick={handleSignOut}
      className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition-colors"
    >
      Sign Out
    </button>
  )
}

export default function DashboardPage() {
  const { data, isPending } = useSession()
  
  if (isPending) {
    return <div className="text-center mt-10">Loading...</div>
  }

  const userName = data?.user?.name
  
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p className="text-xl mb-4">Hello, {userName}!</p> 
      <SignOutButton />
    </div>
  )
}
