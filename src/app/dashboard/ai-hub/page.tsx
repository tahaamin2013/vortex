"use client"

import { ChevronDown } from "lucide-react"

export default function AIHubPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">AI Hub</h2>
          <p className="mt-1 text-sm text-gray-400">
            Provide your AI Agent with your company's knowledge so it can automatically answer customers with accurate
            and relevant information. Only English articles supported.{" "}
            <a href="#" className="text-[oklch(0.65_0.18_40)] hover:underline">
              Learn more
            </a>
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
          Import
          <ChevronDown className="size-4" />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[oklch(0.15_0_0)]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-[oklch(0.12_0_0)]">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Document Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Created At</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="px-6 py-24">
                  <div className="flex flex-col items-center justify-center gap-4">
                    {/* Empty State Icon */}
                    <div className="flex size-24 items-center justify-center rounded-full bg-white/5">
                      <svg className="size-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-400">No data</p>
                  </div>
                </td>
              </tr>
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
