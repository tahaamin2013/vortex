"use client"

import { Edit2, Trash2 } from "lucide-react"
import { useState } from "react"

interface WorkflowItem {
  id: number
  name: string
  triggerType: string
  number: string
  status: "Approved" | "Pending" | "Rejected"
  createdAt: string
}

const initialWorkflows: WorkflowItem[] = [
  {
    id: 1,
    name: "Customer Support Assistant",
    triggerType: "Manual Trigger",
    number: "-",
    status: "Approved",
    createdAt: "06-08-2025 05:00",
  },
  {
    id: 2,
    name: "Hospital Appointment Booking",
    triggerType: "Manual Trigger",
    number: "-",
    status: "Approved",
    createdAt: "06-08-2025 05:00",
  },
  {
    id: 3,
    name: "Hotel Booking Assistant",
    triggerType: "Manual Trigger",
    number: "-",
    status: "Approved",
    createdAt: "06-08-2025 05:00",
  },
  {
    id: 4,
    name: "Real Estate Lead Generation",
    triggerType: "Manual Trigger",
    number: "-",
    status: "Approved",
    createdAt: "06-08-2025 05:00",
  },
]

export default function WorkflowPage() {
  const [workflows] = useState<WorkflowItem[]>(initialWorkflows)

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Workflow</h2>
          <p className="mt-1 text-sm text-gray-400">
            Select a Flow below and make it your own by customising it.{" "}
            <a href="#" className="text-[oklch(0.65_0.18_40)] hover:underline">
              Learn more
            </a>{" "}
            <a href="#" className="inline-flex items-center gap-1 text-blue-500 hover:underline">
              <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm1 15H9v-2h2zm0-4H9V5h2z" />
              </svg>
              Watch Tutorial
            </a>
          </p>
        </div>
        <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
          Create Flow
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[oklch(0.15_0_0)]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-[oklch(0.12_0_0)]">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Flow Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Trigger Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Number</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Created At</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {workflows.map((workflow) => (
                <tr key={workflow.id} className="transition-colors hover:bg-white/5">
                  <td className="px-6 py-4 text-sm text-white">{workflow.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{workflow.triggerType}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex size-6 items-center justify-center rounded-full bg-green-500">
                        <svg className="size-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">{workflow.number}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        workflow.status === "Approved"
                          ? "bg-green-500/20 text-green-400"
                          : workflow.status === "Pending"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {workflow.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">{workflow.createdAt}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg border border-blue-500 p-2 text-blue-500 transition-colors hover:bg-blue-500/10">
                        <Edit2 className="size-4" />
                      </button>
                      <button className="rounded-lg border border-red-500 p-2 text-red-500 transition-colors hover:bg-red-500/10">
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
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
