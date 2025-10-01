"use client"

import { User, Lock, Users, Radio, Plug, SettingsIcon, CreditCard, Reply, ChevronDown } from "lucide-react"
import { useState } from "react"

type SettingsTab =
  | "personal-info"
  | "change-password"
  | "users"
  | "channels"
  | "integrations"
  | "account-setting"
  | "plan-billing"
  | "auto-reply"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("personal-info")

  const menuItems = [
    { id: "personal-info" as SettingsTab, label: "Personal Info", icon: User, section: "Your Preferences" },
    { id: "change-password" as SettingsTab, label: "Change Password", icon: Lock, section: "Your Preferences" },
    { id: "users" as SettingsTab, label: "Users", icon: Users, section: "Account Management" },
    { id: "channels" as SettingsTab, label: "Channels", icon: Radio, section: "Account Management" },
    { id: "integrations" as SettingsTab, label: "Integrations", icon: Plug, section: "Account Management" },
    {
      id: "account-setting" as SettingsTab,
      label: "Account Setting",
      icon: SettingsIcon,
      section: "Workspace Setting",
    },
    { id: "plan-billing" as SettingsTab, label: "Plan and billing", icon: CreditCard, section: "Workspace Setting" },
    { id: "auto-reply" as SettingsTab, label: "Auto Reply", icon: Reply, section: "Workspace Setting" },
  ]

  return (
    <div className="flex flex-1 gap-0 overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/10 bg-[oklch(0.12_0_0)] p-4">
        <div className="space-y-6">
          {["Your Preferences", "Account Management", "Workspace Setting"].map((section) => (
            <div key={section}>
              <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">{section}</h3>
              <div className="space-y-1">
                {menuItems
                  .filter((item) => item.section === section)
                  .map((item) => {
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                          activeTab === item.id
                            ? "bg-blue-600/20 text-blue-400"
                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <Icon className="size-4" />
                        {item.label}
                      </button>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-[oklch(0.1_0_0)] p-8">
        {activeTab === "personal-info" && (
          <div className="mx-auto max-w-4xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">Personal Information</h2>
              <p className="mt-1 text-sm text-gray-400">
                Your personal dashboard for viewing and editing your details.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Name</label>
                  <input
                    type="text"
                    defaultValue="Taha Amin"
                    className="w-full rounded-lg border border-white/10 bg-[oklch(0.15_0_0)] px-4 py-2.5 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Company Name</label>
                  <input
                    type="text"
                    defaultValue="Devkins"
                    className="w-full rounded-lg border border-white/10 bg-[oklch(0.15_0_0)] px-4 py-2.5 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="923074241757"
                    className="w-full rounded-lg border border-white/10 bg-[oklch(0.15_0_0)] px-4 py-2.5 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Time Zone */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Time Zone</label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-lg border border-white/10 bg-[oklch(0.15_0_0)] px-4 py-2.5 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                      <option>Asia/Kolkata</option>
                      <option>America/New_York</option>
                      <option>Europe/London</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
                    Email
                    <svg className="size-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </label>
                  <input
                    type="email"
                    defaultValue="tahaamindobi2013@gmail.com"
                    className="w-full rounded-lg border border-white/10 bg-[oklch(0.15_0_0)] px-4 py-2.5 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Default Country Code */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
                    Default Country Code
                    <svg className="size-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-lg border border-white/10 bg-[oklch(0.15_0_0)] px-4 py-2.5 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                      <option>+92 (PK)</option>
                      <option>+1 (US)</option>
                      <option>+44 (UK)</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-8 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab !== "personal-info" && (
          <div className="flex h-full items-center justify-center">
            <p className="text-gray-400">Content for {activeTab} coming soon...</p>
          </div>
        )}
      </div>
    </div>
  )
}
