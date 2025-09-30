import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SignUpForm } from "@/components/auth/sign-up-form"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <main className="min-h-dvh flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-balance">Create your Control Media account</CardTitle>
          <CardDescription>Start your free trial in seconds.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignUpForm />
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link className="text-primary underline underline-offset-4" href="/signin">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
