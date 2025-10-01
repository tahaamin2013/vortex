"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MessageSquare, Radio, FileText, BarChart3, Workflow, Sparkles, Megaphone, Settings, Menu } from "lucide-react"
import { useState } from "react"

const navItems = [
  { href: "/dashboard/chats", icon: MessageSquare, label: "Chats" },
  { href: "/dashboard/channels", icon: Radio, label: "Channels" },
  { href: "/dashboard/templates", icon: FileText, label: "Templates" },
  { href: "/dashboard/reports", icon: BarChart3, label: "Reports" },
  { href: "/dashboard/workflow", icon: Workflow, label: "WorkflowBuilder" },
  { href: "/dashboard/ai-hub", icon: Sparkles, label: "AI Hub" },
  { href: "/dashboard/campaign", icon: Megaphone, label: "Campaign" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <aside
      className={`flex flex-col border-r border-white/10 bg-[oklch(0.15_0_0)] transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header with logo */}
      <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-[oklch(0.65_0.18_40)]">
            <span className="text-lg font-bold text-white">C</span>
          </div>
          {!isCollapsed && <span className="text-lg font-semibold text-white">ControlHippo</span>}
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="rounded-md p-1.5 text-gray-400 hover:bg-white/5 hover:text-white"
          aria-label="Toggle sidebar"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 transition-colors ${
                isActive ? "bg-[oklch(0.65_0.18_40)] text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"
              } ${isCollapsed ? "justify-center" : ""}`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className="size-5 shrink-0" />
              {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Footer with user avatar */}
      <div className="border-t border-white/10 p-4">
        <div className={`flex items-center gap-3 ${isCollapsed ? "justify-center" : ""}`}>
          <div className="flex size-8 items-center justify-center rounded-full bg-[oklch(0.65_0.18_40)] text-sm font-semibold text-white">
            TA
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">Taha Amin</span>
              <span className="text-xs text-gray-400">Owner</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
