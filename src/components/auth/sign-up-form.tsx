"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export function SignUpForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const name = String(form.get("name") || "")
    const email = String(form.get("email") || "")
    const password = String(form.get("password") || "")

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data?.error || "Unable to register")
        setLoading(false)
        return
      }
      // auto sign-in then redirect (NextAuth redirect callback sends to /dashboard)
      const signInRes = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })
      if (signInRes?.error) {
        setError(signInRes.error)
      } else {
        router.push("/dashboard")
      }
    } catch {
      setError("Unexpected error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8 text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold mb-2 text-balance text-white">Create Account</h1>
        <p className="text-gray-400 text-pretty">Join us and start your journey today</p>
      </div>

      <div className="bg-black border-2 border-orange-500/20 rounded-xl p-8 shadow-[0_0_40px_rgba(255,119,0,0.15)] animate-fade-in-up [animation-delay:100ms]">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2 group">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white transition-colors duration-200 group-focus-within:text-orange-500"
            >
              Name
            </label>
            <div className="relative">
              <input
                id="name"
                name="name"
                placeholder="Your name"
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-gray-500 transition-all duration-300 focus:outline-none focus:border-orange-500 focus:shadow-[0_0_0_3px_rgba(255,119,0,0.1)] focus:scale-[1.01]"
              />
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                  focusedField === "name" ? "w-full" : "w-0"
                }`}
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white transition-colors duration-200 group-focus-within:text-orange-500"
            >
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-gray-500 transition-all duration-300 focus:outline-none focus:border-orange-500 focus:shadow-[0_0_0_3px_rgba(255,119,0,0.1)] focus:scale-[1.01]"
              />
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                  focusedField === "email" ? "w-full" : "w-0"
                }`}
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white transition-colors duration-200 group-focus-within:text-orange-500"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                required
                minLength={6}
                placeholder="••••••••"
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-gray-500 transition-all duration-300 focus:outline-none focus:border-orange-500 focus:shadow-[0_0_0_3px_rgba(255,119,0,0.1)] focus:scale-[1.01]"
              />
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                  focusedField === "password" ? "w-full" : "w-0"
                }`}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Must be at least 6 characters</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-md p-3 animate-shake">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full px-4 py-3 bg-orange-500 text-white font-medium rounded-lg transition-all duration-300 hover:bg-orange-600 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,119,0,0.4)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
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
                Creating account...
              </span>
            ) : (
              "Create account"
            )}
          </button>
        </form>

        <div className="mt-6 text-center animate-fade-in-up [animation-delay:200ms]">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-orange-500 hover:text-orange-400 hover:underline transition-all duration-200 font-medium"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
