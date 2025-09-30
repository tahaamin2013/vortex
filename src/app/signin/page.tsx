import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SignInForm } from "@/components/auth/sign-in-form"
import Link from "next/link"

export default function SignInPage() {
  return (
    <main className="min-h-dvh flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-balance">Welcome back to Control Media</CardTitle>
          <CardDescription>Sign in to continue to your dashboard.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignInForm />
          <p className="text-sm text-muted-foreground">
            New here?{" "}
            <Link className="text-primary underline underline-offset-4" href="/signup">
              Create an account
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
