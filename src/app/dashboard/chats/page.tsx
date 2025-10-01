"use client"

import {
  Search,
  MoreVertical,
  Phone,
  Video,
  Paperclip,
  Mic,
  Send,
  Smile,
  ChevronDown,
  User,
  MessageSquare,
} from "lucide-react"
import { useState } from "react"

interface Conversation {
  id: number
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread?: number
  online?: boolean
}

interface Message {
  id: number
  sender: "user" | "other"
  content: string
  time: string
}

const conversations: Conversation[] = [
  {
    id: 1,
    name: "Michael Jones",
    avatar: "MJ",
    lastMessage: "Hey, how are you?",
    time: "2m ago",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Jane Doe",
    avatar: "JD",
    lastMessage: "Thanks for your help!",
    time: "1h ago",
    online: false,
  },
]

const messages: Message[] = [
  {
    id: 1,
    sender: "other",
    content: "Hey, I need help with my order",
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "user",
    content: "Of course! I'd be happy to help. What's your order number?",
    time: "10:31 AM",
  },
  {
    id: 3,
    sender: "other",
    content: "It's #12345",
    time: "10:32 AM",
  },
  {
    id: 4,
    sender: "user",
    content: "Let me check that for you. One moment please.",
    time: "10:33 AM",
  },
]

export default function ChatsPage() {
  const [selectedChat, setSelectedChat] = useState<number>(1)
  const [messageInput, setMessageInput] = useState("")

  return (
    <div className="flex h-[calc(100vh-4rem)] gap-0 overflow-hidden">
      {/* Conversations Sidebar */}
      <div className="w-80 border-r border-white/10 bg-[oklch(0.12_0_0)]">
        {/* Search Header */}
        <div className="border-b border-white/10 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full rounded-lg border border-white/10 bg-[oklch(0.15_0_0)] py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="overflow-y-auto">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setSelectedChat(conv.id)}
              className={`flex w-full items-start gap-3 border-b border-white/10 p-4 transition-colors hover:bg-white/5 ${
                selectedChat === conv.id ? "bg-white/10" : ""
              }`}
            >
              {/* Avatar */}
              <div className="relative">
                <div className="flex size-12 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {conv.avatar}
                </div>
                {conv.online && (
                  <div className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-[oklch(0.12_0_0)] bg-green-500" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">{conv.name}</h3>
                  <span className="text-xs text-gray-400">{conv.time}</span>
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <p className="truncate text-sm text-gray-400">{conv.lastMessage}</p>
                  {conv.unread && (
                    <span className="ml-2 flex size-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white">
                      {conv.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-1 flex-col bg-[oklch(0.1_0_0)]">
        {/* Chat Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[oklch(0.12_0_0)] p-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
              MJ
            </div>
            <div>
              <h3 className="font-semibold text-white">Michael Jones</h3>
              <p className="text-xs text-gray-400">Online</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Assignment Dropdown */}
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[oklch(0.15_0_0)] px-3 py-1.5">
              <User className="size-4 text-gray-400" />
              <span className="text-sm text-white">Assign to</span>
              <ChevronDown className="size-4 text-gray-400" />
            </div>

            <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
              <Phone className="size-5" />
            </button>
            <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
              <Video className="size-5" />
            </button>
            <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
              <MoreVertical className="size-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 space-y-4 overflow-y-auto p-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex max-w-md gap-3 ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                {/* Avatar */}
                <div
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${
                    message.sender === "user" ? "bg-blue-600" : "bg-gray-600"
                  }`}
                >
                  {message.sender === "user" ? "TA" : "MJ"}
                </div>

                {/* Message Bubble */}
                <div>
                  <div
                    className={`rounded-2xl px-4 py-2.5 ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "border border-white/10 bg-[oklch(0.15_0_0)] text-white"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                  <p className={`mt-1 text-xs text-gray-500 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="border-t border-white/10 bg-[oklch(0.12_0_0)] p-4">
          <div className="flex items-end gap-3">
            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
                <Paperclip className="size-5" />
              </button>
              <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
                <MessageSquare className="size-5" />
              </button>
              <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
                <Smile className="size-5" />
              </button>
            </div>

            {/* Input Field */}
            <div className="flex-1">
              <textarea
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type your message..."
                rows={1}
                className="w-full resize-none rounded-lg border border-white/10 bg-[oklch(0.15_0_0)] px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Send Buttons */}
            <div className="flex gap-2">
              <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
                <Mic className="size-5" />
              </button>
              <button className="rounded-lg bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700">
                <Send className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
