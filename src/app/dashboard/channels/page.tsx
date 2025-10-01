"use client"

import { ArrowLeft, Plug } from "lucide-react"

interface Channel {
  id: number
  name: string
  subtitle?: string
  description: string
  icon: string
  iconBg: string
  status?: "new" | "popular"
}

const channels: Channel[] = [
  {
    id: 1,
    name: "Chatbot",
    description:
      "Easy communication with basic chat functionality. Seamless interaction with user-friendly interface, security, and customization.",
    icon: "💬",
    iconBg: "bg-blue-900",
    status: "new",
  },
  {
    id: 2,
    name: "WhatsApp Business API",
    subtitle: "(Official Platform API)",
    description:
      "To get started, we need an official, verified Facebook Business Manager page for WhatsApp Business authentication.",
    icon: "📱",
    iconBg: "bg-green-600",
  },
  {
    id: 3,
    name: "Telegram",
    subtitle: "(Mobile App)",
    description: "A phone number linked to your Telegram account is required for authentication.",
    icon: "✈️",
    iconBg: "bg-blue-500",
    status: "popular",
  },
  {
    id: 4,
    name: "Telegram Bot",
    description:
      "Easily connect your Telegram Bot to start sending and receiving messages. Quick setup and smooth communication with your users on Telegram.",
    icon: "🤖",
    iconBg: "bg-blue-400",
    status: "new",
  },
  {
    id: 5,
    name: "Multi Widget",
    description:
      "Combine channels into a single widget to provide fast, seamless support via customers' preferred platforms.",
    icon: "⚙️",
    iconBg: "bg-purple-600",
    status: "new",
  },
  {
    id: 6,
    name: "Messenger",
    description:
      "To get started, we need an official, verified Facebook Business Manager page for Messenger authentication.",
    icon: "💬",
    iconBg: "bg-blue-600",
    status: "new",
  },
  {
    id: 7,
    name: "Instagram",
    description: "Connect your Instagram business account for direct messaging.",
    icon: "📷",
    iconBg: "bg-gradient-to-br from-purple-600 to-pink-600",
    status: "new",
  },
  {
    id: 8,
    name: "Email",
    description: "Integrate your email support channels for comprehensive customer communication.",
    icon: "✉️",
    iconBg: "bg-blue-700",
    status: "new",
  },
  {
    id: 9,
    name: "Twilio SMS",
    description: "Send and receive SMS messages through Twilio integration.",
    icon: "📨",
    iconBg: "bg-red-600",
    status: "new",
  },
]

export default function ChannelsPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <button className="rounded-lg p-2 transition-colors hover:bg-white/5">
            <ArrowLeft className="size-5 text-white" />
          </button>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">Channels</h2>
          </div>
        </div>
      </div>

      {/* Channel Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {channels.map((channel) => (
          <div
            key={channel.id}
            className="flex flex-col rounded-lg border border-white/10 bg-white p-6 transition-all hover:shadow-lg"
          >
            {/* Icon and Badge */}
            <div className="flex items-start justify-between">
              <div className={`flex size-14 items-center justify-center rounded-full ${channel.iconBg} text-2xl`}>
                {channel.icon}
              </div>
              {channel.status && (
                <span
                  className={`flex items-center gap-1 rounded px-2 py-1 text-xs font-medium ${
                    channel.status === "popular" ? "bg-[oklch(0.65_0.18_40)] text-white" : "bg-green-600 text-white"
                  }`}
                >
                  {channel.status === "new" && (
                    <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2l2.5 6.5L19 10l-6.5 2.5L10 19l-2.5-6.5L1 10l6.5-2.5z" />
                    </svg>
                  )}
                  {channel.status === "popular" && (
                    <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )}
                  {channel.status === "popular" ? "Popular" : "New"}
                </span>
              )}
            </div>

            {/* Title */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {channel.name}
                {channel.subtitle && <span className="ml-1 text-sm font-normal text-gray-600">{channel.subtitle}</span>}
              </h3>
            </div>

            {/* Description */}
            <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{channel.description}</p>

            {/* Connect Button */}
            <button className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-gray-900 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50">
              <Plug className="size-4" />
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
