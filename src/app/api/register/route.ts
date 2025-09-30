import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ error: "Email already in use" }, { status: 409 })
    }

    const hash = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: { name: name ?? null, email, password: hash },
      select: { id: true, email: true, name: true },
    })

    return NextResponse.json({ user })
  } catch  {
    return NextResponse.json({ error: "Registration failed" }, { status: 500 })
  }
}
