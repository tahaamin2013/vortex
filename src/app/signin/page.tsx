import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SignInForm } from "@/components/auth/sign-in-form"
import Link from "next/link"

export default function SignInPage() {
  return (
    <main className="min-h-dvh  flex items-center justify-center p-6">
     
          <SignInForm />
       
    </main>
  )
}
