import { type NextRequest, NextResponse } from "next/server"

let cache: null = null

export async function GET() {
  const defaultProfile = {
    name: "Your Name",
    email: "you@example.com",
    avatarUrl: "",
    syncInstagram: false,
    syncWhatsApp: false,
  }
  return NextResponse.json(cache ?? defaultProfile)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  // In a real app, persist with Prisma here.
  cache = body
  return NextResponse.json(cache)
}
