import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default async function DashboardPage() {
  const session = await auth()
  if (!session) redirect("/signin")

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Link href="/">
          <Button variant="secondary">Back to site</Button>
        </Link>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Hello, {session.user?.name || session.user?.email}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is a placeholder. Share your dashboard UI and I’ll plug it in here.
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
