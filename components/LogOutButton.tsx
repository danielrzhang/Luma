"use client"

import { useRouter } from "next/navigation"
import { signOut as firebaseSignOut } from "firebase/auth"
import { auth } from "@/firebase/client"
import { signOut } from "@/lib/actions/auth.action"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const LogOutButton = () => {
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await firebaseSignOut(auth)
      await signOut()
      toast.success("Signed out successfully.")
      router.push("/sign-in")
    } catch (error) {
      console.error("Error signing out:", error)
      toast.error("Failed to sign out. Please try again.")
    }
  }

  return (
    <Button onClick={handleSignOut} className="btn-primary">
      Log Out
    </Button>
  )
}

export default LogOutButton