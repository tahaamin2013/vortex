"use client"

import { useEffect, useState } from "react"
import useSWR from "swr"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

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
    <Card>
      <CardHeader>
        <CardTitle>Profile & Integrations</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="avatar">Avatar URL</Label>
            <Input
              id="avatar"
              placeholder="https://..."
              value={form.avatarUrl || ""}
              onChange={(e) => update("avatarUrl", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-md border p-4">
            <div>
              <div className="font-medium">Sync Instagram</div>
              <div className="text-sm text-gray-600">Connect your Instagram Business account to receive DMs.</div>
            </div>
            <Switch
              checked={form.syncInstagram}
              onCheckedChange={(v) => update("syncInstagram", v)}
              aria-label="Enable Instagram sync"
            />
          </div>

          <div className="flex items-center justify-between rounded-md border p-4">
            <div>
              <div className="font-medium">Sync WhatsApp</div>
              <div className="text-sm text-gray-600">
                Connect your WhatsApp Business API number to receive messages.
              </div>
            </div>
            <Switch
              checked={form.syncWhatsApp}
              onCheckedChange={(v) => update("syncWhatsApp", v)}
              aria-label="Enable WhatsApp sync"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className={`text-sm ${saved ? "text-blue-700" : "text-gray-500"}`}>
          {saved ? "Saved!" : "Make changes and click Save"}
        </div>
        <Button onClick={onSave} disabled={saving}>
          {saving ? "Saving..." : "Save changes"}
        </Button>
      </CardFooter>
    </Card>
  )
}
