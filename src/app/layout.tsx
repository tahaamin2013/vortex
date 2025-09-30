import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import AuthSessionProvider from "@/components/auth/session-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Control Media - Connect with Customers Everywhere",
  description: "Unify chats from your website, apps, and messaging platforms into one inbox",
  generator: "v0.app",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <AuthSessionProvider>{children}</AuthSessionProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
