"use client"

export default function TemplatesPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Templates</h2>
          <p className="mt-1 text-sm text-gray-400">Create and manage your message templates for quick responses.</p>
        </div>
        <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
          Create Template
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[oklch(0.15_0_0)]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-[oklch(0.12_0_0)]">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Template Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Phone Number</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Created Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="px-6 py-24">
                  <div className="flex flex-col items-center justify-center gap-6">
                    {/* Empty State Illustration */}
                    <div className="relative">
                      <svg className="size-48 text-gray-700" viewBox="0 0 200 200" fill="none">
                        {/* Document illustration */}
                        <rect x="50" y="30" width="100" height="140" rx="8" fill="currentColor" opacity="0.1" />
                        <rect
                          x="50"
                          y="30"
                          width="100"
                          height="140"
                          rx="8"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.2"
                        />
                        {/* Lines */}
                        <line x1="70" y1="60" x2="130" y2="60" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                        <line x1="70" y1="80" x2="130" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                        <line x1="70" y1="100" x2="110" y2="100" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                        {/* Plus icon */}
                        <circle cx="100" cy="140" r="15" fill="currentColor" opacity="0.2" />
                        <line x1="100" y1="132" x2="100" y2="148" stroke="currentColor" strokeWidth="2" />
                        <line x1="92" y1="140" x2="108" y2="140" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>

                    {/* Text Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-white">Create Your First Template</h3>
                      <p className="mt-2 max-w-md text-sm text-gray-400">
                        Save time by creating reusable message templates. Perfect for common responses and automated
                        workflows.
                      </p>
                      <button className="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                        Create Template
                      </button>
                    </div>
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
