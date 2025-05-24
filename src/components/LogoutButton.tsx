"use client"

import { signOut } from "next-auth/react"

export default function LogoutButton() {
  const handleLogout = () => {
    signOut({
      callbackUrl: "/login",
    })
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
    >
      Logout
    </button>
  )
}