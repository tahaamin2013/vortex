"use client"

export default function CampaignPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Campaign</h2>
          <p className="mt-1 text-sm text-gray-400">
            Create and manage your marketing campaigns to reach your audience effectively.
          </p>
        </div>
        <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
          Create Campaign
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[oklch(0.15_0_0)]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-[oklch(0.12_0_0)]">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Interval</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Schedule</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Number</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Recipient</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Success</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Failed</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={9} className="px-6 py-24">
                  <div className="flex flex-col items-center justify-center gap-6">
                    {/* Empty State Illustration */}
                    <div className="relative">
                      <svg className="size-48 text-gray-700" viewBox="0 0 200 200" fill="none">
                        {/* Megaphone illustration */}
                        <circle cx="100" cy="100" r="80" fill="currentColor" opacity="0.1" />
                        <path
                          d="M70 80L130 60V140L70 120V80Z"
                          fill="currentColor"
                          opacity="0.2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M70 80H50C45 80 40 85 40 90V110C40 115 45 120 50 120H70"
                          fill="currentColor"
                          opacity="0.2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle cx="140" cy="70" r="8" fill="currentColor" opacity="0.3" />
                        <circle cx="155" cy="85" r="6" fill="currentColor" opacity="0.3" />
                        <circle cx="150" cy="105" r="5" fill="currentColor" opacity="0.3" />
                      </svg>
                    </div>

                    {/* Text Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-white">Create Your First Campaign</h3>
                      <p className="mt-2 max-w-md text-sm text-gray-400">
                        Start engaging with your audience by creating a new campaign. Reach out to your customers with
                        targeted messages.
                      </p>
                      <button className="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                        Create Campaign
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
