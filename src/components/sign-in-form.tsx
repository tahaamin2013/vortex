"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignInForm() {
  const router = useRouter()
  const params = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const email = String(form.get("email") || "")
    const password = String(form.get("password") || "")

    const callbackUrl = params.get("callbackUrl") || "/dashboard"

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    })

    if (res?.error) {
      setError(res.error)
      setLoading(false)
    } else {
      router.push(callbackUrl)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8 text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold mb-2 text-balance">Welcome Back</h1>
        <p className="text-muted-foreground text-pretty">Sign in to continue your journey</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-8 shadow-2xl animate-fade-in-up [animation-delay:100ms]">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2 group">
            <Label
              htmlFor="email"
              className="text-sm font-medium transition-colors duration-200 group-focus-within:text-primary"
            >
              Email
            </Label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(255,119,0,0.1)] focus:scale-[1.01]"
              />
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  focusedField === "email" ? "w-full" : "w-0"
                }`}
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <Label
              htmlFor="password"
              className="text-sm font-medium transition-colors duration-200 group-focus-within:text-primary"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="••••••••"
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(255,119,0,0.1)] focus:scale-[1.01]"
              />
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  focusedField === "password" ? "w-full" : "w-0"
                }`}
              />
            </div>
          </div>

          {error && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3 animate-shake">
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,119,0,0.3)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Signing in...
              </span>
            ) : (
              "Sign in"
            )}
          </Button>
        </form>

        <div className="mt-6 text-center animate-fade-in-up [animation-delay:200ms]">
          <p className="text-sm text-muted-foreground">
            Dont have an account?{" "}
            <a
              href="/signup"
              className="text-primary hover:underline transition-all duration-200 hover:text-primary/80"
            >
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
