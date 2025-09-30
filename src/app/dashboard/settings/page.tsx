import { ProfileForm } from "@/components/dashboard/profile-form"

export default function SettingsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-semibold">Settings</h1>
      <ProfileForm />
    </main>
  )
}
