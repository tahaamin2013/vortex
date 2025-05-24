import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      )
    }

    // Create new user (password stored as plain text as requested)
    const user = await prisma.user.create({
      data: {
        email,
        password, // No hashing as requested
        name: name || null,
      }
    })

    // Return user without password
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(
      { 
        message: "User created successfully", 
        user: userWithoutPassword 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error("Error creating user:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get("email")
    const password = searchParams.get("password")
    const name = searchParams.get("name")

    // If query parameters are provided, create a new user
    if (email && password) {
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email }
      })

      if (existingUser) {
        return NextResponse.json(
          { 
            success: false,
            error: "User already exists with this email" 
          },
          { status: 409 }
        )
      }

      // Create new user
      const user = await prisma.user.create({
        data: {
          email,
          password, // Plain text as requested
          name: name || null,
        }
      })

      // Return success response without password
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...userWithoutPassword } = user

      return NextResponse.json({
        success: true,
        message: "User created successfully!",
        user: userWithoutPassword
      })
    }

    // If no query parameters, return all users
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      }
    })

    return NextResponse.json({ 
      success: true,
      users,
      total: users.length,
      instruction: "To add a user, use: /api/users?email=user@example.com&password=123&name=UserName"
    })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json(
      { 
        success: false,
        error: "Internal server error" 
      },
      { status: 500 }
    )
  }
}