"use client"

import { useEffect, useState } from "react"
import useSWR from "swr"

type Profile = {
  name: string
  email: string
  avatarUrl?: string
  syncInstagram: boolean
  syncWhatsApp: boolean
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function ProfileForm() {
  const { data, mutate } = useSWR<Profile>("/api/profile", fetcher)
  const [form, setForm] = useState<Profile>({
    name: "",
    email: "",
    avatarUrl: "",
    syncInstagram: false,
    syncWhatsApp: false,
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (data) setForm(data)
  }, [data])

  function update<K extends keyof Profile>(key: K, value: Profile[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function onSave() {
    setSaving(true)
    setSaved(false)
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Failed to save")
      const body = await res.json()
      mutate(body, { revalidate: false })
      setSaved(true)
    } catch (e) {
      console.log("[v0] profile save error:", (e as Error).message)
    } finally {
      setSaving(false)
      setTimeout(() => setSaved(false), 1800)
    }
  }

  return (
    <div className="rounded-lg border border-white/10 bg-[oklch(0.15_0_0)]">
      <div className="border-b border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white">Profile & Integrations</h3>
      </div>
      <div className="grid gap-6 p-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              id="name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-[oklch(0.1_0_0)] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-[oklch(0.65_0.18_40)] focus:outline-none focus:ring-1 focus:ring-[oklch(0.65_0.18_40)]"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-[oklch(0.1_0_0)] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-[oklch(0.65_0.18_40)] focus:outline-none focus:ring-1 focus:ring-[oklch(0.65_0.18_40)]"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="avatar" className="text-sm font-medium text-gray-300">
              Avatar URL
            </label>
            <input
              id="avatar"
              placeholder="https://..."
              value={form.avatarUrl || ""}
              onChange={(e) => update("avatarUrl", e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-[oklch(0.1_0_0)] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-[oklch(0.65_0.18_40)] focus:outline-none focus:ring-1 focus:ring-[oklch(0.65_0.18_40)]"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-white/10 p-4">
            <div>
              <div className="font-medium text-white">Sync Instagram</div>
              <div className="text-sm text-gray-400">Connect your Instagram Business account to receive DMs.</div>
            </div>
            <button
              onClick={() => update("syncInstagram", !form.syncInstagram)}
              className={`relative h-6 w-11 rounded-full transition-colors ${
                form.syncInstagram ? "bg-[oklch(0.65_0.18_40)]" : "bg-gray-600"
              }`}
              aria-label="Enable Instagram sync"
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                  form.syncInstagram ? "left-[22px]" : "left-0.5"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-white/10 p-4">
            <div>
              <div className="font-medium text-white">Sync WhatsApp</div>
              <div className="text-sm text-gray-400">
                Connect your WhatsApp Business API number to receive messages.
              </div>
            </div>
            <button
              onClick={() => update("syncWhatsApp", !form.syncWhatsApp)}
              className={`relative h-6 w-11 rounded-full transition-colors ${
                form.syncWhatsApp ? "bg-[oklch(0.65_0.18_40)]" : "bg-gray-600"
              }`}
              aria-label="Enable WhatsApp sync"
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                  form.syncWhatsApp ? "left-[22px]" : "left-0.5"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 p-6">
        <div className={`text-sm ${saved ? "text-[oklch(0.65_0.18_40)]" : "text-gray-400"}`}>
          {saved ? "Saved!" : "Make changes and click Save"}
        </div>
        <button
          onClick={onSave}
          disabled={saving}
          className="rounded-lg bg-[oklch(0.65_0.18_40)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[oklch(0.6_0.18_40)] disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save changes"}
        </button>
      </div>
    </div>
  )
}
