"use client"

import { Calendar, ChevronDown } from "lucide-react"

interface StatCard {
  title: string
  value: string
  bgColor: string
}

interface UserStat {
  user: string
  avatar: string
  totalChats: number
  engagedChats: number
  pendingChats: number
  resolvedChats: number
  avgResponseTime: string
  avgResolutionTime: string
}

const stats: StatCard[] = [
  { title: "Total Chats", value: "0", bgColor: "bg-blue-600" },
  { title: "Unattended Chats", value: "0", bgColor: "bg-purple-600" },
  { title: "Engaged Chats", value: "0", bgColor: "bg-green-600" },
  { title: "Pending Chats", value: "0", bgColor: "bg-yellow-600" },
  { title: "Resolved Chats", value: "0", bgColor: "bg-teal-600" },
]

const userStats: UserStat[] = []

export default function ReportsPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Reports</h2>
          <p className="mt-1 text-sm text-gray-400">View detailed analytics and performance metrics for your team.</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-[oklch(0.15_0_0)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5">
          <Calendar className="size-4" />
          <span>Last 7 days</span>
          <ChevronDown className="size-4" />
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.title} className="flex flex-col rounded-lg border border-white/10 bg-[oklch(0.15_0_0)] p-6">
            <div className="flex items-center gap-3">
              <div className={`size-3 rounded-full ${stat.bgColor}`} />
              <span className="text-sm font-medium text-gray-400">{stat.title}</span>
            </div>
            <div className="mt-4 text-3xl font-bold text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* User Statistics Table */}
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[oklch(0.15_0_0)]">
        <div className="border-b border-white/10 p-6">
          <h3 className="text-lg font-semibold text-white">User Statistics</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-[oklch(0.12_0_0)]">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">User</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Total Chats</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Engaged Chats</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Pending Chats</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Resolved Chats</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Avg. Response Time</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Avg. Resolution Time</th>
              </tr>
            </thead>
            <tbody>
              {userStats.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-24">
                    <div className="flex flex-col items-center justify-center gap-4">
                      {/* Empty State Icon */}
                      <div className="flex size-24 items-center justify-center rounded-full bg-white/5">
                        <svg className="size-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-400">No user statistics available</p>
                    </div>
                  </td>
                </tr>
              ) : (
                userStats.map((user, index) => (
                  <tr key={index} className="border-b border-white/10 transition-colors hover:bg-white/5">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                          {user.avatar}
                        </div>
                        <span className="text-sm text-white">{user.user}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">{user.totalChats}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{user.engagedChats}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{user.pendingChats}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{user.resolvedChats}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{user.avgResponseTime}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{user.avgResolutionTime}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-2 border-t border-white/10 px-6 py-4">
          <span className="text-sm text-gray-400">10 / Page</span>
        </div>
      </div>
    </div>
  )
}
